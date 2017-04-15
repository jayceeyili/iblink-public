import React from 'react';
import PresentationList from './presentationList.jsx';

const text = {
  'font-size': '.5em'
}

const Overview = props => (
  <div>
    <div className="col-sm-12 yourPresentations" style={text}>
      <h2>Your Presentations
      </h2>
      <PresentationList />
    </div>
    <div className="col-sm-12 accountFriendEvents" style={text}>
      <h2>Presentations Attended</h2>
    </div>
  </div>
);

export default Overview;
