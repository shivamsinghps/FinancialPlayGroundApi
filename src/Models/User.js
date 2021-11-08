const mongoose = require("mongoose"),
  uniqueValidator = require("mongoose-unique-validator"),
  crypto = require("crypto"),
  Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 3,
      max: 256,
    },
    lastName: {
      type: String,
      required: true,
      min: 3,
      max: 256,
    },
    phoneNumber: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: [true, "Invalid Email"],
      index: {
        unique: true,
      },
      match:
        /^[a-z][a-z0-9]*[.+-]?[a-z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]{2,3}([.]{1}[a-z]{2,3})?$/,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    address: {
      type: String,
      required: false,
    },
    city: {
      type: String,
      required: false,
    },
    state: {
      type: String,
      required: false,
    },
    zipcode: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: false,
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    profilePic: {
      type: String,
      required: false,
    },
    otp: {
      type: Number,
    },
    currentWalletValue: {
      default: 10000,
    },
    stats:[
      {
        key:String,
        quantity:Number,
        TotalPrice:Number,
      }
    ],
    hash: String,
    salt: String,
  },
  {
    timestamps: true,
  }
);

//method to set password
userSchema.methods.setPassword = (password) => {
  this.salt = crypto.randomBytes(16).toString("hex");
  this.hash = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64, "sha512")
    .toString("hex");
  return { salt: this.salt, hash: this.hash };
};

//method to validate password
userSchema.methods.validPassword = (password, user) => {
  if (user.salt) {
    var hash = crypto
      .pbkdf2Sync(password, user.salt, 1000, 64, "sha512")
      .toString("hex");
    return user.hash === hash;
  }
  return -1;
};

userSchema.plugin(uniqueValidator);
module.exports = mongoose.model("User", userSchema, "User");
