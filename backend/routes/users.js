const express = require('express')
const router = express.Router()
const { registerUsers,signinUsers,profile } = require('../controllers/users')
const {protect} = require('../middleware/authMiddleware.js')
//users routes
router.post('/register',registerUsers)
router.post('/signin',signinUsers)
router.get('/profile',protect,profile)



module.exports = router