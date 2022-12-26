const wrapper = require("structured-json-response");
const { PrismaClient } = require("@prisma/client");
const Prisma = new PrismaClient();
async function BlogDelete(req,res){
    const id = req.params.blogid
    try {
        const data = await Prisma.blog.delete({
            where:{
                id:id
            }
        })
        if (data) {
            res.status(200).json(wrapper.ok("blog deleted", data));
          } else {
            res.status(400).json(wrapper.failured("blog not found ", err));
          }
    }
    catch(err){
        res.status(400).json(wrapper.faiured('blog cant deleted ',err))
    }
}
module.exports = {BlogDelete}