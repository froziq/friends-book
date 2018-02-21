import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'sanitize.css';
import App from './App/index';
import './App.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
