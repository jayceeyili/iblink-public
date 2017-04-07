import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './components/AppRouter.jsx';
// import $ from 'jquery';

// class App extends React.Component {
//   constructor(){
//     super()
//   }
//
//   render() {
//     return(
//       <h1>hello world</h1>
//     )
//   }
// }

ReactDOM.render(
          <AppRouter />,
          document.getElementById('app')
        );
