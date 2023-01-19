import React, { useEffect } from 'react';
import { useRef } from 'react';
import { batch, useDispatch, useSelector } from 'react-redux';
import { resolvePath, useNavigate } from 'react-router-dom';
import IMAGES from '../../images';
import { addCurrentUser, selectCurrentUser } from '../../store/slices/currentUserSlice/currentUserSlice';
import { addAllPost } from '../../store/slices/postsSlice/postsSlice';
import { addPost, selectUserData } from '../../store/slices/userDataSlice/userDataSlice';

import { flushSync } from 'react-dom';


import './CreatePost.css'
const CreatePost = () => {
    const currentUser = useSelector(selectCurrentUser)
    const formRef = useRef(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userData = useSelector(selectUserData)
    useEffect(()=>{
        if(!currentUser){
            navigate("/")
        }
    },[currentUser])

    useEffect(() => {
        // return () => {
            // dispatch(addCurrentUser(userData.find(user => user.id === currentUser.id)))
        // }
        // return async () => {
            
            // console.log('test');
            // // await
            // dispatch(addAllPost(userData.find(user => user.id === currentUser.id).posts[0])  )
        // }
        
    },[userData])



    function handelSubmit(e){
        e.preventDefault()
        
        batch(() => {

            let postId = new Date().getTime().toString()
    
            dispatch(addPost({
                postId,
                id: currentUser.id,
                img: formRef.current[0].value,
                name: currentUser.username,
                description: formRef.current[1].value,
            }))
            
           
            dispatch(addAllPost({
                postId,
                id: currentUser.id,
                img: formRef.current[0].value,
                name: currentUser.username,
                description: formRef.current[1].value,
            }))
        })
        // await
        batch(() => {
            dispatch(addCurrentUser(userData.find(user => user.id === currentUser.id)))
    
            formRef.current.reset()
        })
    }
    return (
        <div style={{marginTop: '100px', textAlign: 'center'}} className='container'>
            <h1 style={{fontSize: '50px' }}>Create Post</h1>
            <br/>
            <img style={{margin:'auto'}} width='100px' src={IMAGES.createPost} alt="" />   
            <br/>
            <form onSubmit={handelSubmit} style={{marginTop: '50px'}} ref={formRef} >
                <input type="text" placeholder='img/url'/>
                <input type="text" placeholder='description'/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default CreatePost;
