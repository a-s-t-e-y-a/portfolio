const otpGenerator = require("otp-generator");
const sendmail = require("./email.send");
const { PrismaClient } = require("@prisma/client");
const Prisma = new PrismaClient();

async function otpGenerate(data){
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
  return (data_)
}
module.exports = otpGenerate