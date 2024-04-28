const User = require("../models/User");
const Post = require("../models/Post");
const { success, error } = require("../utils/responsWrapper");

// const getAllPostController = async (req, res) => {
//   // res.send("here is some Post")
//   res.send(success(200, "here is some post"));
// };

const creatPostController = async (req, res) => {
  const { caption } = req.body;
  console.log("caption of post", caption);
  if(! caption){
      return res.send(error(400, "Caption is required for post"));
  }
  const owner = req._id;
  console.log("owener id is", owner);
  // jis user ki id se frontend se create post ki req aayyi hai
  try {
    const post = await Post.create({
      owner,
      caption,
    });
    // post create ho jaye to user ko find karo db se
    const user = await User.findById(req._id);
    user.posts.push(post._id);
    // user ki post wale array me push post i id push kar di
    // post._ id har mongoose document me mil jati hai
    await user.save();
    return res.send(success(201, post));
  } catch (e) {
    return res.send(error(500, e.message));
  }
};

const likeAndUnlike = async (req, res) => {
  try {
    const { postId } = req.body; // post id jo like karni ha
    const curUserId = req._id;

    const post = await Post.findById(postId);
    if (!post) {
      return res.send(error(404, "post is not find"));
    }
    if (post.likes.includes(curUserId)) {
      const index = post.likes.indexOf(curUserId);
      // index  find out from likes array
      post.likes.splice(index, 1);
      await post.save();
      return res.send(success(200, "Post unLiked"));
    } else {
      post.likes.push(curUserId);
      post.save();
      return res.send(success(200, "Post liked"));
    }
  } catch (e) {
    return res.send(error(500, e.message));
  }
};

const updatePost = async (req, res) => {
  try {
    const { postId, caption } = req.body;
    const curUserId = req._id;
    const post = await Post.findById(postId);
    if (!post) {
      return res.send(error(404, "Post not found"));
    }
    if (post.owner.toString() !== curUserId) {
      return res.send(error(403, "Only owner can update their post"));
    }
    if (caption) {
      post.caption = caption; //post ka caption body ke captin ke sath update ho gya hai
    }
    await post.save();
    return res.send(success(200, { post })); // sending theupdated post
  } catch (e) {
    return res.send(error(404, e.message));
  }
};

const deletePost = async (req, res) => {
  try {
    const { postId } = req.body;
    const curUserId = req._id;
    const curUser = await User.findById(curUserId);
    const post = await Post.findById(postId);
    if (!post) {
      return res.send(error(404, "Post not found"));
    }
    if (post.owner.toString() !== curUserId) {
      return res.send(error(403, "Only owner can delete their post"));
    }
    const index = curUser.posts.indexOf(postId);
    curUser.posts.splice(index, 1);
    await curUser.save();
    await post.deleteOne() ;
    return res.send(success(200, "Post is Deleted"));
  } catch (e) {
    console.log("error is ", e);
    res.send(error(500, e.message));
  }
};

module.exports = { creatPostController, likeAndUnlike, updatePost, deletePost };
