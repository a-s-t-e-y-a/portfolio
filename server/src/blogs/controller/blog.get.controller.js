const wrapper = require("structured-json-response");
const { PrismaClient } = require("@prisma/client");
const Prisma = new PrismaClient();
async function BlogGet(req,res){
    const data = await Prisma.blog.findMany()
    if(data){
        res.status(200).json(wrapper.ok(data))
    }else{
        res.status(400).json(wrapper.failured('no data found'))
    }
}
module.exports ={BlogGet}