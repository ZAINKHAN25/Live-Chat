import React from 'react'
import { useNavigate } from 'react-router-dom';

function CreateARoom() {
  const navigateTo = useNavigate();


  return (
    <div className='WelcomeBody'>
      <div className="cardWelcomePage">
        <h2>Create A Room</h2>
        <input placeholder='Your Name' type="text" className="InputJoinName mt-1" />
        <input placeholder='Create Your Room Id' type="text" className="InputJoinRoomId" />
        <input type="button" value="Create A Room" onClick={() => navigateTo("/meet")} className='CreateARoomButn mt-4' />
      </div>
    </div>
  )
}

export default CreateARoom;