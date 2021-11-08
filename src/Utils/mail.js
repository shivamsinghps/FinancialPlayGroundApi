const nodemailer = require("nodemailer")

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.mailname,
    pass: process.env.mailkey,
  },
})

module.exports = async (mailOptions) =>  {
  
  return new Promise(async (resolve, reject) => {
    let info = await transporter.sendMail({
      from: process.env.mailname, // sender address
      replyTo:  process.env.mailname,
      to: mailOptions.to,
      subject: mailOptions.subject,
      html: mailOptions.html
    })
  
    console.log("Message sent: %s", info.messageId)
    if(info.messageId) {
      resolve()
    } else {
      reject()
    }
  })
  
}
