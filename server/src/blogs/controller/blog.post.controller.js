const wrapper = require("structured-json-response");
const { PrismaClient } = require("@prisma/client");
const Prisma = new PrismaClient();
async function BlogPost(req, res) {
  const data = req.body;
  let user;
  console.log(data.userid);
  try {
    user = await Prisma.user.findUnique({
      where: {
        id: data.userid,
      },
    });
  } catch (err) {
    res.status(401).json(wrapper.failured(err));
  }
  if (user) {
    try {
      const data_ = await Prisma.blog.create({
        data: {
          body: data.body,
          userid: data.userid,
          date: Date(),
        },
      });
      res.status(200).json(wrapper.ok('blog created sucessfully',data_))
    } catch (err) {
      res.status(400).json(wrapper.failured(err));
    }
  } else {
    res.status(400).json(wrapper.failured("user can't found"));
  }
}
module.exports = { BlogPost };
