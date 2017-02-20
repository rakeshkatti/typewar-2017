import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
      fetch("/hi", function (res) {
          console.log(res);
      });
    return (
      <div className="App">
        <div className="App-header">
          <h2><code>typewar</code></h2>
        </div>
      </div>
    );
  }
}

export default App;
