// import React, { useRef, useState } from 'react'
import './Navbar.scss' 
import Avatar from '../avatar/Avatar'
import { useNavigate } from 'react-router-dom'
import { FiLogOut } from "react-icons/fi";
import { useDispatch} from 'react-redux'
import { setLoading } from '../../redux/slices/appConfigSlice';

function Navbar() {
  const navigate = useNavigate();

 
const dispatch = useDispatch()

  function toggleLoadingBar (){
    // if(loading){
      dispatch(setLoading(true));
     
    // }
    // else{
    //   dispatch(setLoading(false));
      
    // }
  }

  return (
    <div className='Navbar'>
        <div className='container'>
            <h2 className='banner hover-link' onClick={()=>navigate('/')}>
                Social Media
            </h2>
            <div className='right-side'>
                <div className='profile hover-link'onClick={()=>navigate('/profile/12')}> <Avatar/></div>
                  <div className='logout hover-link' onClick={toggleLoadingBar}> <FiLogOut /> </div>
            </div>

        </div>
    </div>
  )
}

export default Navbar