const nodemailer = require('nodemailer');


/// otp



    
  console.log("fdsf")
const sendmail = (otp,email) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL_ID_KEY,
          pass: process.env.EMAIL_ID_KEY_GEN,
        },
      });
      const mailoption = {
        from: "testnodemailerkrishna@gmail.com",
        to: email,
        subject: "otp for",
        text: "your otp is :- " + otp,
      };

      transporter.sendMail(mailoption, function (err, info) {
        if (err) {
          console.log(err);
        } else {
          console.log(info)
          return info
        }
      });
  };
  module.exports = sendmail