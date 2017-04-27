import React from 'react';
// import BookmarkButtonContainer from '../slide_utilities/bookmark/BookmarkButtonContainer.jsx';
import SendStatusButton from '../slide_utilities/toggle_present_button/SendStatusButton.jsx';
// import NotesContainer from '../slide_utilities/notes/notesContainer.jsx';
import MetricsContainer from '../metrics/metricsContainer';
import PresenterCarouselContainer from '../../containers/presenterCarouselContainer';
import LoginModal from '../authentication/LoginView.jsx';
import styles from './presenterStyle.css';


const images = `${styles.image}`;
const title = {
  color: 'black',
  textAlign: 'center'
};
const buttons = `${styles.buttons}`;
const container = `${styles.container}`;

const PastPresentationView = props => (
  <div className={container}>
    <h3 style={title}> {props.title}
    </h3>
    <div>
      {props.noPresentations ? (
        <div>Empty site. Please upload a presentation to get started.</div>
        ) : (
          <section className={images}>
            <PresenterCarouselContainer />
              {props.authentication === "" ?
                  <div>
                    <LoginModal />
                  </div>
                  :
                  <div>
                    <div className={buttons}>
                      <SendStatusButton />
                    </div>
                    {/* <div>
                      <NotesContainer />
                      <BookmarkButtonContainer />
                    </div> */}
                    <div>
                      <MetricsContainer />
                    </div>
                  </div>
              }

          </section>
        )}
    </div>
  </div>
);

export default PastPresentationView;
