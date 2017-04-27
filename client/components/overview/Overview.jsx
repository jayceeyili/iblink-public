import React from 'react';
import YourPresentationsContainer from '../../containers/yourPresentationsContainer.jsx';

const text = {
  fontSize: '.5em'
};

const container = {
  overflow: 'auto'
}

const Overview = props => (
  <div style={container}>
    <div className="col-sm-12 yourPresentations" style={text}>
      <YourPresentationsContainer />
    </div>
  </div>
);

export default Overview;
