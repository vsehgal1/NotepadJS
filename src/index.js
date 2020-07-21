import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase');
require('firebase/firestore');
const firebaseConfig = {
  apiKey: "AIzaSyA6IbSN0MyG2VuXXjqsS4bV_4CjJ7ihE0w",
  authDomain: "notepadjs.firebaseapp.com",
  databaseURL: "https://notepadjs.firebaseio.com",
  projectId: "notepadjs",
  storageBucket: "notepadjs.appspot.com",
  messagingSenderId: "657751927925",
  appId: "1:657751927925:web:8e29d59abaf0542fd39c3c",
  measurementId: "G-YPZ40QG4BR"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();


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
