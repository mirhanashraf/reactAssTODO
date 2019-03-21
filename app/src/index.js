import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import reduxStore from './reduxStore';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>,
  rootElement,
);
