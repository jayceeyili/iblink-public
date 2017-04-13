import React from 'react';
import PresenterView from './../components/presenter_live_view/PresenterLivePresentationView.jsx'

export default class LivePresenterPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>This is the Live Presenter page</h1>
        <PresenterView />
      </div>
    );
  }
}
