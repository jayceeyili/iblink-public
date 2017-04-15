import React from 'react';
import LivePresentationView from './../components/audience_live_view/AudienceLivePresentationView.jsx'

class LiveAudiencePage extends React.Component {
  render() {
    // console.log(this.ImageGallery.state.currentIndex);
    const centered = {
      'textAlign': 'center'
    }

    return (
      <div>
        <h1 style={centered}>MVP Presentation</h1>
        <LivePresentationView />

      </div>
    );
  }
}

export default LiveAudiencePage;
