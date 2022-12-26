const wrapper = require("structured-json-response");
const { PrismaClient } = require("@prisma/client");
const Prisma = new PrismaClient();
async function BlogGetId(req, res) {
  const id = req.params.blogid;
  try {
    const data = await Prisma.blog.findUnique({
      where: {
        id: id,
      },
    });
    if (data) {
      res.status(200).json(wrapper.ok("blog found", data));
    } else {
      res.status(400).json(wrapper.failured("not found ", err));
    }
  } catch (err) {
    res.status(400).json(wrapper.failured("not found ", err));
  }
}
module.exports = { BlogGetId };
