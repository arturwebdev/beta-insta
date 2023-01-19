import './MessengerPeoplesMessages.css'
import IMAGES from '../../images'
import MessengerPeoplesMessage from '../MessengerPeoplesMessage/MessengerPeoplesMessage'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { selectCurrentUser } from '../../store/slices/currentUserSlice/currentUserSlice'

function MessengerPeoplesMessages() {
// 	const message = [
// 		{
// 			 id: '1',
// 			 img: IMAGES.cover1,
// 			 name: 'user_1',
// 			 active: 'Active 30m ago'
// 		},
// 		{
// 			 id: '2',
// 			 img: IMAGES.cover2,
// 			 name: 'user_2',
// 			 active: 'Active 30m ago'
// 		},
// 		{
// 			 id: '3',
// 			 img: IMAGES.cover3,
// 			 name: 'user_3',
// 			 active: 'Active 30m ago'
// 		},
// 		{
// 			 id: '4',
// 			 img: IMAGES.cover4,
// 			 name: 'user_4',
// 			 active: 'Active 30m ago'
// 		},
// 		{
// 			 id: '5',
// 			 img: IMAGES.cover5,
// 			 name: 'user_5',
// 			 active: 'Active 30m ago'
// 		},
// 		{
// 			 id: '6',
// 			 img: IMAGES.cover6,
// 			 name: 'user_6',
// 			 active: 'Active 30m ago'
// 		}
//   ]
	const currentUser = useSelector(selectCurrentUser)
	const navigate = useNavigate()

	useEffect(()=>{
		if(!currentUser){
			navigate("/")
		}
	},[])
  return (
	 <div className='Messenger-left-col-peoples-messages'>
		<div className='Messenger-left-col-people-message'>
			<div className='Messsage-img'>
				<img src="https://camo.githubusercontent.com/0d517f168dc77ac4a085c2463c52c551812d55dad6f089c31749c97116db405d/687474703a2f2f692e696d6775722e636f6d2f504d75365834442e706e67"alt=''/>
			</div>
			<div className='Message-info'>
				<p>Bot</p>
			</div>
	 	</div>
		{/* {
			message.map(el => <MessengerPeoplesMessage key={el.id} img={el.img} name={el.name} active={el.active}/>)
		} */}
	 </div>
  )
}

export default MessengerPeoplesMessages
