import React from 'react';
import Bookmark from '../slide_utilities/bookmark/BookmarkButton.jsx';
import TogglePresentButton from '../slide_utilities/toggle_present_button/TogglePresentButton.jsx';

const PastPresentationView = props => (
  <div>
    <h3>Title of past presentation
    </h3>
    <div> Insert carousel here!
      <TogglePresentButton />
    </div>
    <Bookmark />
  </div>
);

export default PastPresentationView;
