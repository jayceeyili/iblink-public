import React from 'react';
import Overview from '../components/overview/Overview.jsx';
import PastPresentationContainer from '../containers/PastPresentationContainer';
import NavBar from '../components/nav_bar/NavBar.jsx';
import styles from './Dashboard.css';


const Dashboard = () => {
  const dashboardStyles = `container-fluid ${styles.dashboard} `;
  const overviewStyles = `col-sm-3 ${styles.overview}`;
  const presentationStyles = `col-sm-9 ${styles.presentation}`;

  return (
      // { -------PAGE WRAPPER------ }
    <div className={dashboardStyles} >
      <NavBar />
      {/* -------LEFT HAND COLUMN------- */}
      <div className={overviewStyles}>
        <Overview />
      </div>

      {/* -------RIGHT HAND COLUMN------- */}
      <div className={presentationStyles}>
        <PastPresentationContainer />
      </div>
    </div>
    );
};

export default Dashboard;
