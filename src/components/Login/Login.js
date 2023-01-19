import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import IMAGES from '../../images'
import { addCurrentUser } from '../../store/slices/currentUserSlice/currentUserSlice'
import { fetchUsers } from '../../store/slices/userDataSlice/userDataAPI'
import { selectUserData } from '../../store/slices/userDataSlice/userDataSlice'
import "./Login.css"

function Login() {
    const formRef = useRef(null)
    const userData = useSelector(selectUserData)
    const navigate = useNavigate()
    const dispatch = useDispatch()



    useEffect(()=>{

        if(!userData.length){
            dispatch(fetchUsers())
        }
        
    },[])




    function handleSubmit(e){
        e.preventDefault()
        if(userData.some(el => (el.email === formRef.current[0].value || el.username === formRef.current[0].value ) && el.password === formRef.current[1].value)){
            dispatch(addCurrentUser(userData.find(el => (el.email === formRef.current[0].value || el.username === formRef.current[0].value ) && el.password === formRef.current[1].value))) 

            
            
            navigate("/main")
        }
    }

  return (
    <div className='login'>
        <form ref={formRef} onSubmit={handleSubmit}>
            <img src={IMAGES.logo} className="brand-img" alt="" />
            <input defaultValue="Bret" placeholder='Email' type="text"/><br/>
            <input defaultValue="gwenborough" placeholder='Password' type="password"/><br/>
            <NavLink to="/reg">Register</NavLink><br/>
            <button className='button' type='submit'>Sign Up</button>
        </form>

    </div>
  )
}

export default Login