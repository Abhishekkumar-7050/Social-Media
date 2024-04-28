import React from 'react'
import './Profile.scss'
import Post from '../post/Post'
import userImg  from '../../assets/user.png'
import { useNavigate } from 'react-router-dom'
import CreatePost from '../createPost/CreatePost'
import { useSelector } from 'react-redux'
function Profile() {
 const navigate = useNavigate();
 const myProfile = useSelector(state => state.appConfigReducer.myProfile)

  return (
    <div className='Profile'>
    <div className='container'>
    <div className='left-part'>
      <CreatePost/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
    </div>
    <div className='right-part'>
      <div className='profile-card'>
        <img className='user-img ' src={myProfile?.avatar?.url || userImg} alt='user pic'></img>
        <h3 className='user-name'>{myProfile?.name}</h3>
        <h3 className='bio'> {myProfile?.bio}</h3>
        <div className='follower-info'>
          <h4>40 follower</h4>
          <h4>16 following</h4>
        </div>
        <button className='follow btn-primary'>Follow</button>
        <button className=' update btn-secondary' onClick={()=>navigate('/updateProfile')} >Update Profile</button>

      </div>
    </div>


    </div>

    </div>
  )
}

export default Profile