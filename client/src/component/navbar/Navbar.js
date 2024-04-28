// import React, { useRef, useState } from 'react'
import './Navbar.scss' 
import Avatar from '../avatar/Avatar'
import { useNavigate } from 'react-router-dom'
import { FiLogOut } from "react-icons/fi";
import { useDispatch, useSelector} from 'react-redux'

function Navbar() {
  const navigate = useNavigate();
 const myProfile = useSelector(state =>state.appConfigReducer .myProfile)
 
// const dispatch = useDispatch()

  function handleLogOutClicked (){
    
  }

  return (
    <div className='Navbar'>
        <div className='container'>
            <h2 className='banner hover-link' onClick={()=>navigate('/')}>
                Social Media
            </h2>
            <div className='right-side'>
                <div className='profile hover-link'onClick={()=>navigate(`/profile/${myProfile ?._id}`)}> <Avatar src={myProfile?.avatar?.url}/></div>
                  <div className='logout hover-link' onClick={handleLogOutClicked}> <FiLogOut /> </div>
            </div>

        </div>
    </div>
  )
}

export default Navbar