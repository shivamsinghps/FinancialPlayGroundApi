const express = require('express')
const router = express.Router()
const checkAuth = require('../Middlewares/auth')
const upload = require('../Utils/upload')

const userPortfolio = require('./User/userPortfolio')
const userAction = require('./User/userAction')

// Porfolio Routes
router.post('/signup', userPortfolio.userSignup)

router.post('/signin', userPortfolio.userSignin)

router.get('/user', checkAuth, userPortfolio.userDetails)

router.patch('/user', checkAuth, userPortfolio.userUpdate)

router.post('/image_upload', checkAuth, upload.single('image'), userPortfolio.imageUpload)

router.post('/password_reset_request', userPortfolio.passwordResetRequest)

router.post('/reset_password', userPortfolio.passwordReset)

// User Action Routes

router.post('/sell',checkAuth, userAction.sell)

router.get('/buy', checkAuth, userAction.buy)

router.patch('/history', checkAuth, userAction.history)

router.post('/getData', checkAuth, userAction.getData)

router.post('/getNews', userAction.getNews)

router.post('/transactions', userAction.transactions)


module.exports = router