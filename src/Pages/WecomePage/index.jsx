import React from 'react';
import "./App.css"
import { useNavigate } from 'react-router-dom';

function WecomePage() {
  const navigateTo = useNavigate();
  return (
    <div className='WelcomeBody'>
      <div className="cardWelcomePage">
        <h2>Join A Chat</h2>
        <input placeholder='Your Name' type="text" className="InputJoinName" />
        <input placeholder='Your Room Id' type="text" className="InputJoinRoomId" />
        <input type="button" value="Join A Room" className='CreateARoomButn mt-4' onClick={()=> navigateTo("/meet")} />
        <span className='my-1'>Or</span>
        <input type="button" value="Creatmeet A Room" onClick={()=> navigateTo("/create-room")} className='CreateARoomButn' />
      </div>
    </div>
  )
}

export default WecomePage;