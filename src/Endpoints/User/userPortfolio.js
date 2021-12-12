const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserData = require("../../Models/User");

const resFormat = require("../../Utils/format");
const sendEmail = require("../../Utils/mail");
const otp = require("../../Utils/otp");

exports.userSignup = async (req, res) => {
  if (
    !req.body.password ||
    !req.body.email ||
    !req.body.firstName ||
    !req.body.lastName
  ) {
    res
      .status(500)
      .send(
        resFormat.ErrorMsg(
          500,
          "fields not present",
          "Please check the provided field",
          {}
        )
      );
  } else {
    try {
      const user = await UserData.findOne({ email: req.body.email });
      if (!user) {
        let userObj = new UserData();
        let hashObj = userObj.setPassword(req.body.password);
        const newUser = new UserData({
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          password: hashObj.hash,
          hash: hashObj.hash,
          salt: hashObj.salt,
        });

        await newUser.save();
        res
          .status(201)
          .send(resFormat.SuccessMsg({}, `User Created Successfully`));
      } else {
        res
          .status(409)
          .send(
            resFormat.ErrorMsg(409, "User Already Exists", "Conflict Error", {})
          );
      }
    } catch (err) {
      console.log(err);
      res
        .status(500)
        .send(resFormat.ErrorMsg(500, err.message, "server error", {}));
    }
  }
};

exports.userSignin = async (req, res) => {
  if (!req.body.email || !req.body.password) {
    res
      .status(500)
      .send(
        resFormat.ErrorMsg(
          500,
          "fields not present",
          "Please check the password & email field",
          {}
        )
      );
  } else {
    try {
      const user = await UserData.findOne({
        email: req.body.email,
      });
      if (!user) {
        res
          .status(404)
          .send(
            resFormat.ErrorMsg(
              404,
              "User Not Found",
              "Please check your email validity",
              {}
            )
          );
      } else {
        // user.lastActive = new Date().toLocaleString("en-029");
        // await user.save();
        let hashObj = new UserData();
        let result = hashObj.validPassword(req.body.password, user);
        if (result === true) {
          const token = jwt.sign(
            {
              email: user.email,
              id: user._id,
            },
            process.env.SECRET,
            {
              expiresIn: "7d",
            }
          );
          user.password = "";
          user.hash = "";
          user.salt = "";
          const tokenExpiry = Date.now() + 86400000;
          res
            .status(202)
            .send(
              resFormat.SuccessMsg(
                { token, tokenExpiry, user },
                "Successfully SignedIn"
              )
            );
        } else {
          res
            .status(409)
            .send(
              resFormat.ErrorMsg(409, "Password Wrong", "Credentials error", {})
            );
        }
      }
    } catch (err) {
      console.log(err);
      res
        .status(500)
        .send(resFormat.ErrorMsg(500, err.message, "server error", {}));
    }
  }
  ;
};

exports.passwordResetRequest = async (req, res) => {
  const email = req.body.email;
  try {
    const user = await UserData.findOne({ email });
    if (!user) {
      res
        .status(500)
        .send(
          resFormat.ErrorMsg(500, "User Not Found", "check your email", {})
        );
    } else {
      // Set password reset token and it's expiry
      const Otp = otp();
      console.log(otp);
      let newData = await UserData.findOneAndUpdate(
        { _id: user.id },
        { otp: `${Otp}` },
        { new: true }
      );
      // Email user reset link
      const resetLink = `${process.env.FRONTEND_URL}/resetPassword`;

      const mailOptions = {
        to: email,
        subject: "Password Reset Confirmation for YourXray Radiology",
        html: `<h1>otp</h1><br/><h3><strong>${Otp}<strong></h3><a href=${resetLink} target=blank>Click Here</a>`,
      };
      await sendEmail(mailOptions);
      // Return success message
      res
        .status(201)
        .send(
          resFormat.SuccessMsg(
            {},
            `A link to reset your password has been sent to ${email}`
          )
        );
    }
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .send(resFormat.ErrorMsg(500, err.message, "server error", {}));
  }
};

exports.passwordReset = async (req, res) => {
  const { password, Otp, email } = req.body;
  try {
    if (!password) {
      res
        .status(500)
        .send(
          resFormat.ErrorMsg(
            500,
            "provide password",
            "check your password field",
            {}
          )
        );
    } else if (password.length < 6) {
      res
        .status(500)
        .send(
          resFormat.ErrorMsg(
            500,
            "provide correct password",
            "check your password field",
            {}
          )
        );
    } else {
      // Check if user exists and token is valid
      const user = await UserData.findOne({
        email,
        otp: Otp,
      });
      console.log(user);
      if (!user) {
        res
          .status(500)
          .send(
            resFormat.ErrorMsg(500, "User Not Found", "check your email", {})
          );
      } else {
        const tokenized = jwt.sign(
          {
            email: user.email,
            userId: user._id,
          },
          process.env.SECRET,
          {
            expiresIn: "1d",
          }
        );
        const tokenExpiry = Date.now() + 3600000;
        let userObj = new UserData();
        let hashObj = userObj.setPassword(req.body.password);
        user.otp = "";
        user.password = hashObj.hash;
        user.hash = hashObj.hash;
        user.salt = hashObj.salt;
        await user.save();
        res
          .status(200)
          .send(
            resFormat.SuccessMsg(
              { tokenized, tokenExpiry, user },
              "Password Updated Successfully"
            )
          );
      }
    }
  } catch (err) {
    res
      .status(500)
      .send(resFormat.ErrorMsg(500, err.message, "server error", {}));
  }
};

exports.userUpdate = async (req, res) => {
  let data = { ...req.body };
  try {
    const user = await UserData.findOneAndUpdate(
      { email: req.userData.email },
      { firstName: data.firstName, lastName: data.lastName },
      { new: true }
    );
    if (!user) {
      res
        .status(404)
        .send(
          resFormat.ErrorMsg(404, "User Not Found", "check your email", {})
        );
    } else {
      user.password = "";
      user.hash = "";
      user.salt = "";
      res
        .status(200)
        .send(
          resFormat.SuccessMsg({ user }, "User has been updated successfully!")
        );
    }
  } catch (err) {
    res
      .status(500)
      .send(resFormat.ErrorMsg(500, err.message, "server error", {}));
  }
};

exports.userDetails = async (req, res) => {
  const emailId = req.userData.email;

  try {
    let user = await UserData.findOne({ email: emailId });
    if (!user) {
      res
        .status(404)
        .send(
          resFormat.ErrorMsg(404, "User Not Found", "check your email", {})
        );
    } else {
      user.password = "";
      user.hash = "";
      user.salt = "";
      res
        .status(202)
        .send(resFormat.SuccessMsg(user, "Data of the Staff member"));
    }
  } catch (err) {
    res
      .status(500)
      .send(resFormat.ErrorMsg(500, err.message, "server error", {}));
  }
};

// exports.imageUpload = async (req, res) => {
//   try {
//     const email = req.userData.email;
//     let user = await UserData.findOne({ email });
//     if (!user) {
//       res
//         .status(404)
//         .send(
//           resFormat.ErrorMsg(
//             (responseType = 404),
//             (message = "User Not Found"),
//             (userFriendlyMessage = "radiology user not found")
//           )
//         );
//     }

//     //delete from aws stack
//     if (user.image) {
//       var params = {
//         Bucket: process.env.s3Details.bucketName,
//         Key: user.image,
//       };
//       await deleteS3Object(params);
//     }

//     file = req.file;
//     const uploadFile = await uploadToAws(file.buffer);
//     if (!uploadFile.Location) {
//       res
//         .status(500)
//         .send(
//           resFormat.ErrorMsg(
//             (responseType = 500),
//             (message = "server error"),
//             (userFriendlyMessage = "Something went wrong while uploading File!")
//           )
//         );
//     }
//     const image = uploadFile.Location;
//     const imageTag = uploadFile.ETag;
//     const imageData = { image, imageTag };
//     const updateduser = await UserData.findOneAndUpdate(
//       { email },
//       { $set: { image } },
//       { new: true }
//     );
//     updateduser.password = "";
//     updateduser.hash = "";
//     updateduser.salt = "";
//     res
//       .status(201)
//       .send(
//         resFormat.SuccessMsg(
//           { user: updateduser },
//           (userFriendlyMessage = "Successfully uploaded image")
//         )
//       );
//   } catch (err) {
//     res
//       .status(500)
//       .send(
//         resFormat.ErrorMsg(
//           (responseType = 500),
//           (message = "server error"),
//           (userFriendlyMessage = err.message)
//         )
//       );
//   }
// };
