const express = require('express')
const signupRoute = express.Router()
const {signupController} = require('./signup.controller')
const {VerifyOtp} = require('./services/verifyToken.controller')
signupRoute.post('/signup',signupController)
signupRoute.post('/signup/verify-token',VerifyOtp)
module.exports = signupRoute