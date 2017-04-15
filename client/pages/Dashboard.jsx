import React from 'react';
import Overview from '../components/overview/Overview.jsx';
import PastPresentationView from '../components/past_presentation/PastPresentationView.jsx';
import styles from './Dashboard.css';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const dashboardStyles = `container-fluid ${styles.dashboard} `;
    const overviewStyles = `col-xs-2 col-sm-3 ${styles.overview}`;
    const presentationStyles = `col-xs-10 col-sm-9 ${styles.presentation}`;

    return (
      // { -------PAGE WRAPPER------ }
      <div className={dashboardStyles} >


        {/* -------LEFT HAND COLUMN------- */}
        <div className={overviewStyles}>
          <Overview />
        </div>

        {/* -------RIGHT HAND COLUMN------- */}
        <div className={presentationStyles}>
          <PastPresentationView />
        </div>
      </div>

    );
  }
}
