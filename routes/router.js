const express = require('express')
const router = express.Router()

router.post('/register', require('./User/register'))
router.post('/login', require('./User/login'))
router.post('/forgetpassword_1', require('./User/forgetPassword_1'))
router.post('/forgetpassword_2', require('./User/forgetPassword_2'))
router.post('/setpassword', require('./User/setPassword'))
router.get('/getimagetoken', require('./Qiniu/getImageToken'))
router.get('/getfiletoken', require('./Qiniu/getFileToken'))
router.get('/getintroduction', require('./About/getIntroduction'))
router.get('/getcarouselimage', require('./About/getCarouselImage'))
router.get('/getindexnews', require('./News/getIndexNews'))
router.get('/getfooter', require('./About/getFooter'))
router.get('/getabout', require('./About/getAbout'))
router.get('/getnewscount', require('./News/getNewsCount'))
router.get('/getnewslist', require('./News/getNewsList'))
router.get('/getnewsdetail', require('./News/getNewsDetail'))
router.get('/getdirection', require('./Direction/getDirection'))
router.get('/getprize', require('./Achievement/getPrize'))
router.get('/getpaper', require('./Achievement/getPaper'))
router.get('/getpatent', require('./Achievement/getPatent'))
router.get('/getteam', require('./Team/getTeam'))
router.post('/setcarouselimage', require('./About/setCarouselImage'))
router.post('/setintroduction', require('./About/setIntroduction'))
router.post('/setabout', require('./About/setAbout'))
router.post('/newsup', require('./News/newsUp'))
router.post('/newsdown', require('./News/newsDown'))

module.exports = router