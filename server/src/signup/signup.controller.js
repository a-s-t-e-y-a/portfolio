const { notfound, someError } = require("../utils/error");
const wrapper = require("structured-json-response");
const bcrypt = require("bcrypt");
const { PrismaClient } = require("@prisma/client");
const Prisma = new PrismaClient();
const validator = require("email-validator");
const nodemailer = require("nodemailer");
const otpGenerator = require("otp-generator");
const sendmail = require("../services/email.send");
/* 
 function and logic gose down here
*/

async function signupController(req, res) {
  const info = req.body;
  /* 
            hashing the passoword
    
    */

  const data = await Prisma.user.findUnique({
    where: {
      email: info.email,
    },
  });
  if (data) {
    res.status(422).json(wrapper.failured("email already existed"));
  } else {
    try {
      bcrypt.hash(info.password, 10, async (err, hash) => {
        if (err) {
          res.status(501).json(wrapper.failured("some error ouccured"));
        }
        /* 
            checking if email is right or wrong
        */
        if (validator.validate(info.email)) {
          try {
            const data = await Prisma.user.create({
              data: {
                name: info.name,
                password: hash,
                email: info.email,
                date: Date(),
              },
            });
            if (data) {
              //// sending otp to the user
              const otp = otpGenerator.generate(6, {
                upperCaseAlphabets: false,
                specialChars: false,
              });
              await sendmail(otp,data.email);
              const data_ = await Prisma.Otp.create({
                data: {
                  otp: otp,
                  user_email: data.email,
                  date: Date(),
                  expirydate :Date.now()+300000
                },
              });
              if (data_) {
                res.send({
                  email: data.email,
                  otp: data_.id,
                });
              } else {
                res
                  .status(400)
                  .json(wrapper.failured("some thing bad ocurred"));
              }
            } else {
              res.status(400).json(wrapper.failured("some thing bad ocurred"));
            }
          } catch (err) {
            console.log(err)
            res.status(500).json(wrapper.failured("erorr of prisma", err));
          }
        } else {
          res.status(401).json(wrapper.failured("email enterd wrong"));
        }
      });
    } catch (err) {
      res.status(500).json(wrapper.failured("internal server", err));
    }
  }
}
module.exports = { signupController };
