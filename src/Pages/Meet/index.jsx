import React from 'react';
import "./App.css";

function Meet() {
  return (
    <div className='Meet-Page'>


      <div className='navOfLiveChat'>Live Chat</div>

      <div className="mainMessageDiv">

        <div className="otherMessage msgBx" >
          <span className='messageName'>Huzaifa</span>
          <span className='messageMesage'>Hello!</span>
          <span className="messageTime">11:05 PM</span>
        </div>

        <div className="myMessage  msgBx">
          <span className='messageName'>Zain</span>
          <span className='messageMesage'>How Are You</span>
          <span className="messageTime">11:06 PM</span>
        </div>

        <div className="otherMessage  msgBx">
          <span className='messageName'>Huzaifa</span>
          <span className='messageMesage'>Well I was saying how is your Project</span>
          <span className="messageTime">11:07 PM</span>
        </div>

        <div className="myMessage  msgBx">
          <span className='messageName'>Zain</span>
          <span className='messageMesage'>How Are You</span>
          <span className="messageTime">11:06 PM</span>
        </div>

        <div className="otherMessage  msgBx">
          <span className='messageName'>Huzaifa</span>
          <span className='messageMesage'>Well I was saying how is your Project</span>
          <span className="messageTime">11:07 PM</span>
        </div>
        
        <div className="otherMessage  msgBx">
          <span className='messageName'>Huzaifa</span>
          <span className='messageMesage'>Well I was saying how is your Project</span>
          <span className="messageTime">11:07 PM</span>
        </div>

        <div className="myMessage  msgBx">
          <span className='messageName'>Zain</span>
          <span className='messageMesage'>How Are You</span>
          <span className="messageTime">11:06 PM</span>
        </div>

        <div className="otherMessage  msgBx">
          <span className='messageName'>Huzaifa</span>
          <span className='messageMesage'>Well I was saying how is your Project</span>
          <span className="messageTime">11:07 PM</span>
        </div>

      </div>

      <div className="inputDivOfMessage">
        <input type="text" className='MainInputOfChat InputJoinName' placeholder='Hey...' />
        <span><i className="fa-solid fa-paper-plane iconOfPlaneMessage"></i> </span>
      </div>


    </div>
  )
}

export default Meet