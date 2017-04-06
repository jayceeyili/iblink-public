import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

class App extends React.Component {
  constructor(){
    super()
  }

  render() {
    return(
      <h1>hello world</h1>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
