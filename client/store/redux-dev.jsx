const reduxTest = function (state) {
  if (window.__REDUX_DEVTOOLS_EXTENSION__) {
    const devTools = window.__REDUX_DEVTOOLS_EXTENSION__.connect();
    devTools.subscribe((message) => {
      if (message.type === 'DISPATCH' && message.state) {
        console.log('DevTools requested to change the state to', message.state);
      }
    });
  // devTools.init({ value: 'initial state' });
    devTools.send('change state', state);
  }
};

export default reduxTest;
