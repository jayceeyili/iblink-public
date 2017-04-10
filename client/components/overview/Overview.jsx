import React from 'react';
import {Link} from 'react-router-dom';
import MyEvents from './MyEvents.jsx';


export default Overview = (props) => {
    return (
    <div>
      <div className='col-sm-12 accountTopBar'>
        <div className='row-sm-3 accountPhoto'>
         <img src={this.props.friends[0].photourl} />
        </div>
        <div className='row-sm-9 accountName'>
          <h2>{this.props.username}</h2>
        </div>
      </div>
      <div className='col-sm-12 accountMyEvents'>
        <h2>My Events
          <button className='glyphicon glyphicon-plus-sign' onClick={this.props.handleWantsCreateEvent}></button>
        </h2>
        <MyEvents handleWantsEvent={this.props.handleWantsEvent} events={this.props.myEvents}/>

      </div>
      <div className='col-sm-12 accountFriendEvents'>
        <h2>Friend's Events</h2>
        <MyEvents handleWantsEvent={this.props.handleWantsEvent} events={this.props.friendEvents}/>
      </div>
    </div>
    )
  }
}