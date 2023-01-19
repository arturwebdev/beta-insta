import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import IMAGES from '../images'
import "./Error.css"


function Error() {
    const navigate=useNavigate()
  return (
    <div>
        <div className='errorInstagram'>
            <div className='errorLogo'>
                <NavLink to='/main'><img src={IMAGES.logo} className="brand-img" alt="" /></NavLink>
                
            </div>
            <div className='errorSignUpReg'>
               <NavLink to={navigate("/")}><button className='signUp'>Sign up</button></NavLink> 
                <NavLink to={navigate("/login")}><button className='logIn'>Log In</button></NavLink>
            </div>
            
        </div>
        
            <div className='textError'>
                <h2 className='textErrorH2'>Sorry, this page isn't available.</h2>
            </div>
            <div className='errorGoBack'>The link you followed may be broken, or the page may have been removed.</div>
        
    </div>
  )
}

export default Error