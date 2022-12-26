const wrapper = require("structured-json-response");
const { PrismaClient } = require("@prisma/client");
const Prisma = new PrismaClient();
async function BlogUpdate(req, res) {
  const data = req.body;
  console.log(data)
  try {
    const data_ = await Prisma.blog.update({
      where: {
        id: data.userid,
      },
      data: {
        body: data.body,
      },
    });
    if (data_) {
      res.status(400).json(wrapper.failured("blog get updated ", data_));
    } else {
      res.status(400).json(wrapper.failured("blog not found"));
    }
  } catch (err) {
    console.log(err)
    res.status(400).json(wrapper.failured(err));
  }
}
module.exports = { BlogUpdate };
