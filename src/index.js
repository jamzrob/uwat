import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/containers/App.jsx';

import "./assets/styles/normalize.css";
import "./assets/styles/skeleton.css";
import "./assets/styles/app.css";
import "./assets/styles/mobile.css";
import "../node_modules/toastr/build/toastr.css";


function handleNewHash() {
  var location = window.location.hash;
  var application = <App location={location} />;
  ReactDOM.render(application, document.getElementById('app'));
} 

handleNewHash();
window.addEventListener('hashchange', handleNewHash, false);

