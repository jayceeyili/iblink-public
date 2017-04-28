import React from 'react';
import BookmarkButtonContainer from './bookmark/BookmarkButtonContainer.jsx';
import NotesContainer from '../slide_utilities/notes/notesContainer.jsx';

const space = {
  'margin-bottom': '.5em'
}

const FeaturesContainer = () => (
  <div>
    <div style={space}>
      <BookmarkButtonContainer />
    </div>
    <div>
      <NotesContainer />
    </div>
  </div>
);

export default FeaturesContainer;
