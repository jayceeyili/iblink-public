import React from 'react';
import Overview from '../components/overview/Overview.jsx';
import PastPresentationView from '../components/past_presentation/PastPresentationView.jsx';
import PresenterCarouselView from '../components/presenter_live_view/PresenterLivePresentationView.jsx'
import styles from './Dashboard.css';


export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const dashboardStyles = `container-fluid ${styles.dashboard} `;
    const overviewStyles = `col-sm-3 ${styles.overview}`;
    const presentationStyles = `col-sm-9 ${styles.presentation}`;
    const images = `${styles.image}`;
    return (
      // { -------PAGE WRAPPER------ }
      <div className={dashboardStyles} >


        {/* -------LEFT HAND COLUMN------- */}
        <div className={overviewStyles}>
          <Overview />
        </div>

        {/* -------RIGHT HAND COLUMN------- */}
        <div className={presentationStyles}>

          <section className={images}>
            <PresenterCarouselView />
          </section>
          {/* <PastPresentationView /> */}
        </div>
      </div>

    );
  }
}
