import React from 'react';
import FeaturesContainer from '../components/slide_utilities/index.jsx';
import AudienceCarouselContainer from './audienceCarouselContainer';
import LoginContainer from './loginContainer.js';
import styles from '../components/audience_live_view/style.css';


class AudiencePresentationContainer extends React.Component {
  render() {
    // styles for container
    // TODO: fix so it becomes a pure container without CSS?
    const container = `${styles.image}`;
    const bookmark = `${styles.bookmark}`;

    return (
      <div>
        <section className={container}>
          <AudienceCarouselContainer />
        </section>
        {this.props.authentication === '' ?
          <LoginContainer />
          :
          <section className={bookmark}>
          <FeaturesContainer />
          </section>
        }
      </div>
    );
  }
}

export default AudiencePresentationContainer;
