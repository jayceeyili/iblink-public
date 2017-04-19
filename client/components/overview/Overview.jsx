import React from 'react';
import YourPresentationsContainer from '../../containers/yourPresentationsContainer';

const text = {
  fontSize: '.5em'
};

const Overview = props => (
  <div>
    <div className="col-sm-12 yourPresentations" style={text}>
      <YourPresentationsContainer />
    </div>
    <div className="col-sm-12 accountFriendEvents" style={text}>
      <h2>Presentations Attended</h2>
    </div>
  </div>
);

export default Overview;
