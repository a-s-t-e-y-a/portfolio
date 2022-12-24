const verifyOtpSignup = require("../../services/verify.send");
const wrapper = require("structured-json-response");
const { PrismaClient } = require("@prisma/client");
const Prisma = new PrismaClient();

async function VerifyOtp(req, res) {
  const { email, otp_id, otp } = req.body;
  const result = await verifyOtpSignup(email, otp_id, otp);
  console.log(result);
  if (result == true) {
    try {
      await Prisma.user.update({
        where: {
          email: email,
        },
        data: {
          verify: true,
        },
      });
    } catch (err) {
      if (err) {
        res.status(400).json(wrapper.ok("some error ocurred"));
      } else {
        res.status(200).json(wrapper.ok("user get verified"));
      }
    }
  } else if (result == "otp get expired") {
    res
      .status(400)
      .json(wrapper.failured("otp get expired regenearte the otp"));
  } else {
    res.status(500).json(wrapper.failured("otp id dont matched"));
  }
}
module.exports = { VerifyOtp };
