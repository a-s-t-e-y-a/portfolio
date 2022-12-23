const verifyOtpSignup = require('../../services/verify.send')
const wrapper = require("structured-json-response");



async function VerifyOtp(req,res){
    const {email , otp_id , otp} = req.body
   const result= verifyOtpSignup(email,otp_id,otp)
   if(result){
      res.status(200).json(wrapper.ok('user get verified'))
   }
}
module.exports = {VerifyOtp}