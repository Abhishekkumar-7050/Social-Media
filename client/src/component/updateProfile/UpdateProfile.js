import React from 'react'
import userImg from '../../assets/user.png'
import './UpdateProfile.scss'
function UpdateProfile() {
  return (
    <div className='UpdateProfile'>
    <div className='container'>
     <div className='left-part'>
   <img className='userImage' src={userImg} alt='UserImg' />

     </div>
     <div className='right-part'>
      <form>
       <input type='text' placeholder='Your Name' />
       <input type='text' placeholder='Your Bio' />
       <input type='submit' className='btn-primary'  />


      </form>

      <button className='delete-account btn-primary'>Delete Acount</button>

     </div>
      
    </div>

    </div>
  )
}

export default UpdateProfile