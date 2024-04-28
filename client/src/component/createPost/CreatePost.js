import React, { useState } from "react";
  import Avatar from "../avatar/Avatar";
  import './CreatePost.scss'
  import { BsPostcard } from "react-icons/bs";

function CreatePost() {
    const [postImg, setPostImg] = useState("");
 const handleImgChange = (e)=>{

 }

  return (
    <div className="CreatePost">
      <div className="left-part">
        <Avatar/>
      </div>
      <div className="right-part">
        <input type="text" className="captionInput" />
        <div className="img-container">
          <img className="post-img" src="" alt="" />
        </div>
        <div className="bottom-part">
          <div className="input-post-img">
            <label htmlFor="inputImg" className="labelImg">
              {/* <img src={postImg} alt='post image' /> */}
              <BsPostcard />
            </label>
            <input
              className="inputImg"
              id="inputImg"
              type="file"
              accept="image/*"
              onChange={handleImgChange}
            />
          </div>
          <button className="pst-btn btn-primary">Post</button>
        </div>

        
      </div>
    </div>
  );
}

export default CreatePost;
