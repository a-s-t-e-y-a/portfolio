const { PrismaClient } = require("@prisma/client");
const Prisma = new PrismaClient();
const validator = require("email-validator");
async function query_controller(req, res) {
  const { name, query, email_id, phoneno } = req.body;
  if (!name || !query || !email_id) {
    res.status(200).json({
      message: "Enter all valid credentails",
    });
  } else if (!validator.validate(email_id)) {
    res.status(200).json({
      message: "Enter valid email address",
    });
  } else {
    const user = await Prisma.user.create({
      data: {
        email: email_id,
        name: name,
        query: query,
        date: Date(),
      },
    });
    res.status(200).json({
      message: user,
    });
  }
}
module.exports = { query_controller };
