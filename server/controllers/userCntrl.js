const User = require("../models/User");


const Post = require("../models/Post");
const { error,success } = require("../utils/responsWrapper");

const followOrUnfollowUser = async (req, res) => {
  try {
    const { userIdToFollow } = req.body;
    // kisko follow karna  hai
    const curUserId = req._id;

    const userToFollow = await User.findById(userIdToFollow);
    const curUser = await User.findById(curUserId);
if(curUserId === userIdToFollow){
    return res.send(error(409,"cannot follow yourself"));
}

    if (!userToFollow) {
      return res.send(error(404, "User Not Found to follow"));
    }

    if (curUser.followings.includes(userIdToFollow)) {
      // already followed
      const followingIndex = curUser.followings.indexOf(userIdToFollow);
      curUser.followings.splice(followingIndex, 1);
      // curr user ne pahale hi follow kar rakha hai to uske folloing se unfollow matlab
      // splice ho jaga

      // lekin user to follow  ke  folloer se bhi nikalna hoga
      const followerIndex = userToFollow.followers.indexOf(curUser);
      userToFollow.followers.splice(followerIndex, 1);
      await userToFollow.save();
      await curUser.save();
      return res.send(success(200, "user unfollowed"));
    } else {
        userToFollow.followers.push(curUser);
        curUser.followings.push(userIdToFollow);
        await userToFollow.save();
      await curUser.save();
      return res.send(success(200, "user followed"));
    }
  } catch (e) {
    // console.log("errpr is ->", e);
      return res.send(error(404, e.massage))
  }
};

const getPostOfFollowing= async (req, res)=>{
   try {
    const curUserId = req._id;
    const curUser = await User.findById(curUserId);
     // me post me jake dekhunga  jis jis post ke andar mere curr user ki following
     // se match kar rhe hai uni post lake de dedo 
     const posts = await Post.find({
        'owner':{ // '$in  matlab in side
            '$in': curUser.followings
        }
     }
     )
     console.log("posts is :", posts);
     return res.send(success(200,posts));
    
   } catch (e) {
    console.log("error is :", e);
     res.send(error(500, e.massage));
   }
}

module.exports = {
    followOrUnfollowUser,
    getPostOfFollowing,
    // get my post
    // delet profile
    // get userpost any user
}