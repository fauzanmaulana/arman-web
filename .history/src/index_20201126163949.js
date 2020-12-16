import React from 'react';
import ReactDOM from 'react-dom';
import './css/animate.min.css';
import './css/bootstrap.min.css';
import './css/flaticon.css';
import './css/font-awesome.min.css';
import './css/gijgo.css';
import './css/magnific-popup.css';
import './css/nice-select.css';
import './css/slick.css';
import './css/slicknav.css';
import './css/themify-icons.css';
import './css/style.css';
// import './css/theme-default.css';
import './css/owl.carousel.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
