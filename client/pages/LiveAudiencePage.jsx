import React from 'react';
import FeaturesContainer from './../components/slide_utilities/index.jsx';
import LivePresentationView from './../components/audience_live_view/AudienceLivePresentationView.jsx'

class LiveAudiencePage extends React.Component {
  render() {
    // console.log(this.ImageGallery.state.currentIndex);
    return (
      <div>
        <h1>This is the Live Audience Page</h1>

        <LivePresentationView />
        <FeaturesContainer />

      </div>
    );
  }
}

export default LiveAudiencePage;
