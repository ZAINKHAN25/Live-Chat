import React from 'react';
import "./App.css";

function Meet() {
  return (
    <div className='Meet-Page'>


      <div className='navOfLiveChat'>Live Chat</div>

      <div className="mainMessageDiv">

        <div className="otherMessage msgBx" >
          <span className='messageName'>Huzaifa</span>
          <p className='messageMesage'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam omnis qui maiores nulla aperiam dolore dolor nobis at, error nam praesentium autem, sunt molestiae impedit distinctio labore suscipit illum asperiores ex minima, odit amet fuga consequatur est! Veniam minus sit omnis, corporis assumenda nostrum? Iusto beatae saepe ipsum minima ratione!</p>
          <span className="messageTime">11:05 PM</span>
        </div>

        <div className="myMessage  msgBx">
          <span className='messageName'>Zain</span>
          <p className='messageMesage'>How Are You</p>
          <span className="messageTime">11:06 PM</span>
        </div>

        <div className="otherMessage  msgBx">
          <span className='messageName'>Huzaifa</span>
          <p className='messageMesage'>Well I was saying how is your Project</p>
          <span className="messageTime">11:07 PM</span>
        </div>

        <div className="myMessage  msgBx">
          <span className='messageName'>Zain</span>
          <p className='messageMesage'>How Are You</p>
          <span className="messageTime">11:06 PM</span>
        </div>

        <div className="otherMessage  msgBx">
          <span className='messageName'>Huzaifa</span>
          <p className='messageMesage'>Well I was saying how is your Project</p>
          <span className="messageTime">11:07 PM</span>
        </div>
        
        <div className="otherMessage  msgBx">
          <span className='messageName'>Huzaifa</span>
          <p className='messageMesage'>Well I was saying how is your Project</p>
          <span className="messageTime">11:07 PM</span>
        </div>

        <div className="myMessage  msgBx">
          <span className='messageName'>Zain</span>
          <p className='messageMesage'>How Are You</p>
          <span className="messageTime">11:06 PM</span>
        </div>

        <div className="otherMessage  msgBx">
          <span className='messageName'>Huzaifa</span>
          <p className='messageMesage'>Well I was saying how is your Project</p>
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