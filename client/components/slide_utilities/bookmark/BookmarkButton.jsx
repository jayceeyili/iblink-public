import React from 'react';
// import

export default class Bookmark extends React.Component {
  constructor(props) {
    super(props);
    this.toggleBookmark = this.toggleBookmark.bind(this);
  }

  toggleBookmark() {
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleBookmark}>Bookmark</button>
      </div>
    );
  }
}
