import React from 'react';
import Bookmark from '../slide_utilities/bookmark/BookmarkButton.jsx';
import SendStatusButton from '../slide_utilities/toggle_present_button/SendStatusButton.jsx';
import PresenterCarouselView from '../presenter_live_view/PresenterLivePresentationView.jsx';
import styles from './presenterStyle.css';


const images = `${styles.image}`;
const title = {
  'color': 'black',
  'textAlign': 'center'
}
const buttons = `${styles.buttons}`

const PastPresentationView = props => (
  <div>
    <h3 style={title}>MVP Presentation
    </h3>
    <div>
      <section className={images}>
        <PresenterCarouselView />
        <div className={buttons}>
          <Bookmark />
        </div>
        <div className={buttons}>
          <SendStatusButton />
        </div>
      </section>
    </div>
  </div>
);

export default PastPresentationView;
