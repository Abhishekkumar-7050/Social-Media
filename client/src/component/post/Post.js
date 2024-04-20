import React from 'react'
import Avatar from '../avatar/Avatar'
import './Post.scss'
import russian from '../../assets/russian.jpg'
import { FcLike } from "react-icons/fc";
function Post() {
  return (
    <div className="Post">
        <div className="heading">
          <Avatar/>
          <h4>Alexzendra dadoria</h4>  
        </div>
        <div className="content">
          <img src={russian} alt=''></img>
        </div>
        <div className="footer">
          <div className='like'>
          <FcLike className='icon' />
          <h4> 4 likes</h4>
          </div>
          <p className='caption'>No need caption !</p>
          <h6 className='time-ago'>4 hrs ago</h6>

          </div>
       
        
    </div>
  )
}

export default Post