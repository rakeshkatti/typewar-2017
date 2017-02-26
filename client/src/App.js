import React, { Component } from 'react';
import HomePage from "./components/HomePage";
import LoggedInHomePage from "./components/LoggedInHome";
import firebase from 'firebase';
import firebaseConfig from './utils/firebase_config';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    firebase.initializeApp(firebaseConfig);
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        return(
            <div className="App">
              <LoggedInHomePage />
            </div>
        );
      } else {
        return(
            <HomePage />
        );
      }
    });
    return(
        <div className="App">
          <HomePage />
        </div>
    );
  }
}

export default App;
