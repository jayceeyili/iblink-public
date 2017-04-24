 import React from 'react';
import Bookmark from '../slide_utilities/bookmark/BookmarkButton.jsx';
import SendStatusButton from '../slide_utilities/toggle_present_button/SendStatusButton.jsx';
import NotesContainer from '../slide_utilities/notes/notesContainer.jsx';
import PresenterCarouselContainer from '../../containers/presenterCarouselContainer';
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
          <PresenterCarouselContainer />
        <div className={buttons}>
          <Bookmark />
        </div>
        <div className={buttons}>
          <SendStatusButton />
        </div>
        <div>
          <NotesContainer />
        </div>
      </section>
    </div>
  </div>
);

export default PastPresentationView;
