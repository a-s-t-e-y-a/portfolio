const wrapper = require("structured-json-response");
const otpGenerate = require("../../services/otp.send");

async function Regenerate(req,res){
    const {data} = req.body;
    const otp_data = await otpGenerate(data);
    if(otp_data){
        res.status(400).json(wrapper.ok(otp_data,data))
    }
}
module.exports={Regenerate}