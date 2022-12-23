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

    if (user) {
      if (otp_user) {
        if (user.verify == false) {
          if (otp_user.otp === otp) {
            return true;
          } else {
            return false;
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
