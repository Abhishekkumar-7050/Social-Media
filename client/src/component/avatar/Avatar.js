import React from 'react'
import  userImage  from '../../assets/user.png'
import  './Avatar.scss'
function Avatar() {
  return (
    <div className='Avatar'>
        <img src={userImage} alt="userImage" /> 
        
    </div>
  )
}

export default Avatar