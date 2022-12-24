const express = require('express')
const signupRoute = express.Router()
const {signupController} = require('./controller/signup.controller')
const {VerifyOtp} = require('./controller/verifyToken.controller')
const {Regenerate} = require('./controller/regenrate.otp')
signupRoute.post('/signup',signupController)
signupRoute.post('/signup/verify-token',VerifyOtp)
signupRoute.post('/signup/regenrate',Regenerate)
module.exports = signupRoute