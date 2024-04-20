const router = require('express').Router();

const requireUser = require('../middlewares/requireUser');
const UserController = require('../controllers/userCntrl');


router.post('/follow',requireUser,UserController.followOrUnfollowUser);
router.get('/getPostsOfFollowing',requireUser,UserController.getPostOfFollowing);

module.exports = router;