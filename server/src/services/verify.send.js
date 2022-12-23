const { PrismaClient } = require("@prisma/client");
const Prisma = new PrismaClient();

async function verifyOtpSignup(email , otp_id , otp){
    try {
        const user = await Prisma.user.findUnique({
            where:{
                email:email
            }
        })
        if(user.verify==false){
        const data = await Prisma.otp.findUnique({
            where:{
                id:otp_id
            }
        })
        if(data.otp === otp && data.expirydate<Date.now()){
           return true
        }
        else{
           return  false
        }
    }
    else{
        return 'user already verified'
    }
    }catch(err){
        console.log(err)
    }
}

module.exports = verifyOtpSignup