const router = require('express').Router();

const requireUser = require('../middlewares/requireUser');
const UserController = require('../controllers/userCntrl');


router.post('/follow',requireUser,UserController.followOrUnfollowUser);
router.get('/getPostsOfFollowing',requireUser,UserController.getPostOfFollowing);
router.get('/getmypost',requireUser,UserController.getMyPost);
router.get('/getusrtpost',requireUser,UserController.getUserPost);
router.delete('/',requireUser,UserController.deleteMyProfile);
router.get('/getmyinfo',requireUser,UserController.getMyInfo);
router.put('/', requireUser,UserController.updateUserProfile)

module.exports = router;