import React from 'react';
import Overview from '../components/overview/Overview.jsx';
import PastPresentationView from '../components/past_presentation_view/PastPresentationView.jsx';
// import styles from './Dashboard.css';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      // { -------PAGE WRAPPER------ }
      <div className="container-fluid dashboard" >


        {/* -------LEFT HAND COLUMN------- */}
        <div className="col-sm-3 overview" >
          <Overview />
        </div>

        {/* -------RIGHT HAND COLUMN------- */}
        <div className="col-sm-9 presentation" >
          <PastPresentationView />
        </div>
      </div>

    );
  }
}
