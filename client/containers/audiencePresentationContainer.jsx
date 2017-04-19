import React from 'react';
import FeaturesContainer from '../components/slide_utilities/index.jsx';
import styles from '../components/audience_live_view/style.css';
import AudienceCarouselContainer from './audienceCarouselContainer';


class AudiencePresentationContainer extends React.Component {
  render() {
    // styles for container
    // TODO: fix so it becomes a pure container without CSS?
    const centered = { textAlign: 'center' };
    const container = `${styles.image}`;
    const bookmark = `${styles.bookmark}`;

    return (
      <div>
        <h1 style={centered}>MVP Presentation</h1>
        <section className={container}>
          <AudienceCarouselContainer />
        </section>
        <section className={bookmark}>
          <FeaturesContainer />
        </section>
      </div>
    );
  }
}

export default AudiencePresentationContainer;

