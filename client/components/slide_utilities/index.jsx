import React from 'react';
import BookmarkButton from './bookmark/BookmarkButton.jsx';

export default class FeaturesContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <BookmarkButton />
      </div>
    )
  }
}
