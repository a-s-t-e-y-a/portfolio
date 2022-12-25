const { PrismaClient } = require("@prisma/client");
const Prisma = new PrismaClient();

async function verifyOtpSignup(email, otp_id, otp) {
  try {
    const user = await Prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    const otp_user = await Prisma.otp.findUnique({
      where: {
        id: otp_id,
      },
    });
    console.log(user,otp_user)
    if (user) {
      if (otp_user) {
        if (user.verify == false) {
          if (otp_user.otp === otp && otp_user.expirydate > Date.now()) {
            console.log('sdfdfd')
            return true;
          } else {
            return 'otp get expired';
          }
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
  }
}

module.exports = verifyOtpSignup;
