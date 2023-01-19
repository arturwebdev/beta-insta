import { configureStore } from "@reduxjs/toolkit";
import { ignoreCommentEmptyText, ignoreSpaceComment, ignoreSpaceInSearchInput } from "./lib/middleware";
import { currentUserReducer } from "./slices/currentUserSlice/currentUserSlice";
import { postsReducer } from "./slices/postsSlice/postsSlice";
import { searchTextReducer } from "./slices/searchSlice/searchSlice";
import { userDataReducer } from "./slices/userDataSlice/userDataSlice";



const store = configureStore({
    reducer:{
        posts: postsReducer,
        searchText:searchTextReducer,
        userData:userDataReducer,
        currentUser:currentUserReducer
    },
    middleware:(getDefaultMiddleware)=>{
        return [...getDefaultMiddleware(),ignoreSpaceInSearchInput,ignoreCommentEmptyText,ignoreSpaceComment]
    }
})

export default store



// import { combineReducers, createStore } from "redux";
// import IMAGES from "../images";


// const store = createStore((state, action) => {
//     switch (action.type) {

//         default:
//             return state
//     }
// }, {
//     users: [
//         {
//             id: '1',
//             name: 'user1',
//             avatar: IMAGES.cover1,
//             postsCount: '3',
//             followers: '188',
//             following: '206',
//             follow: false,
//             bio: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️',
//             images:[
//                 {
//                     postId: '1',
//                     img: IMAGES.cover10,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '2',
//                     img: IMAGES.cover12,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '3',
//                     img: IMAGES.cover11,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '4',
//                     img: IMAGES.cover9,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '5',
//                     img: IMAGES.cover8,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '6',
//                     img: IMAGES.cover7,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '7',
//                     img: IMAGES.cover6,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '8',
//                     img: IMAGES.cover5,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '9',
//                     img: IMAGES.cover4,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 }
//             ]

//         },
//         {
//             id: '2',
//             name: 'user2',
//             avatar: IMAGES.cover2,
//             postsCount: '3',
//             followers: '188',
//             following: '206',
//             likes: '80',
//             commentsCount: '5',
//             follow: false,
//             bio: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️',
//             images:[
//                 {
//                     postId: '1',
//                     img: IMAGES.cover10,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5',
//                 },
//                 {
//                     postId: '2',
//                     img: IMAGES.cover12,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '3',
//                     img: IMAGES.cover11,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '4',
//                     img: IMAGES.cover9,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '5',
//                     img: IMAGES.cover8,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '6',
//                     img: IMAGES.cover7,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '7',
//                     img: IMAGES.cover6,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '8',
//                     img: IMAGES.cover5,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '9',
//                     img: IMAGES.cover4,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 }
//             ]

//         },
//         {
//             id: '3',
//             name: 'user3',
//             avatar: IMAGES.cover3,
//             postsCount: '3',
//             followers: '188',
//             following: '206',
//             likes: '80',
//             commentsCount: '5',
//             follow: false,
//             bio: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️',
//             images:[
//                 {
//                     postId: '1',
//                     img: IMAGES.cover10,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '2',
//                     img: IMAGES.cover12,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '3',
//                     img: IMAGES.cover11,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '4',
//                     img: IMAGES.cover9,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '5',
//                     img: IMAGES.cover8,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '6',
//                     img: IMAGES.cover7,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '7',
//                     img: IMAGES.cover6,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '8',
//                     img: IMAGES.cover5,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '9',
//                     img: IMAGES.cover4,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 }
//             ]

//         },
//         {
//             id: '4',
//             name: 'user4',
//             avatar: IMAGES.cover4,
//             postsCount: '3',
//             followers: '188',
//             likes: '80',
//             commentsCount: '5',
//             following: '206',
//             follow: false,
//             bio: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️',
//             images:[
//                 {
//                     postId: '1',
//                     img: IMAGES.cover10,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '2',
//                     img: IMAGES.cover12,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '3',
//                     img: IMAGES.cover11,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '4',
//                     img: IMAGES.cover9,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '5',
//                     img: IMAGES.cover8,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '6',
//                     img: IMAGES.cover7,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '7',
//                     img: IMAGES.cover6,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '8',
//                     img: IMAGES.cover5,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '9',
//                     img: IMAGES.cover4,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 }

//             ]

//         },
//         {
//             id: '5',
//             name: 'user5',
//             avatar: IMAGES.cover5,
//             postsCount: '3',
//             followers: '188',
//             likes: '80',
//             commentsCount: '5',
//             following: '206',
//             follow: false,
//             bio: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️',
//             images:[
//                 {
//                     postId: '1',
//                     img: IMAGES.cover10,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '2',
//                     img: IMAGES.cover12,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '3',
//                     img: IMAGES.cover11,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '4',
//                     img: IMAGES.cover9,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '5',
//                     img: IMAGES.cover8,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '6',
//                     img: IMAGES.cover7,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '7',
//                     img: IMAGES.cover6,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '8',
//                     img: IMAGES.cover5,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 },
//                 {
//                     postId: '9',
//                     img: IMAGES.cover4,
//                     postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                     likes: '80',
//                     commentsCount: '5'
//                 }
//             ]

//         }
//     ],
//     currentUser: {
//         id: '8',
//         name: 'modern_web_chanel',
//         avatar: IMAGES.profile_pic,
//         postsCount: '9',
//         followers: '160',
//         following: '128',
//         follow: false,
//         bio: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️',
//         images:[
//             {
//                 postId: '1',
//                 img: IMAGES.cover10,
//                 postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                 likes: '80',
//                 commentsCount: '5'
//             },
//             {
//                 postId: '2',
//                 img: IMAGES.cover12,
//                 postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                 likes: '80',
//                 commentsCount: '5'
//             },
//             {
//                 postId: '3',
//                 img: IMAGES.cover11,
//                 postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                 likes: '80',
//                 commentsCount: '5'
//             },
//             {
//                 postId: '4',
//                 img: IMAGES.cover9,
//                 postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                 likes: '80',
//                 commentsCount: '5'
//             },
//             {
//                 postId: '5',
//                 img: IMAGES.cover8,
//                 postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                 likes: '80',
//                 commentsCount: '5'
//             },
//             {
//                 postId: '6',
//                 img: IMAGES.cover7,
//                 postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                 likes: '80',
//                 commentsCount: '5'
//             },
//             {
//                 postId: '7',
//                 img: IMAGES.cover6,
//                 postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                 likes: '80',
//                 commentsCount: '5'
//             },
//             {
//                 postId: '8',
//                 img: IMAGES.cover5,
//                 postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                 likes: '80',
//                 commentsCount: '5'
//             },
//             {
//                 postId: '9',
//                 img: IMAGES.cover4,
//                 postText: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
//                 likes: '80',
//                 commentsCount: '5'
//             }
//         ]

//     }
    
// }) 

// export default store