import React from "react";
import "./Feed.scss";
import Post from '../post/Post'
import Follower from "../follower/Follower";

function Feed() {
  return (
    <div className="Feed">
      <div className="container">
        <div className="left-part">
            <Post/>
            <Post/>
            <Post/>
            <Post/>

        </div>
        <div className="right-part">
          <h3 className="title"> You are following </h3>
          <Follower/>
          <Follower/>
          <Follower/>
          <Follower/>
          <Follower/>
          <h3 className="suggestions">Suggests for you </h3>
          <Follower/>
          <Follower/>
          <Follower/>
          <Follower/>
          <Follower/>
        </div>
      </div>
    </div>
  );
}

export default Feed;
