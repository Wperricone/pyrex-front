import React, { Component } from 'react';
import './App.css';
import { fetchAllPatterns } from './apiCalls'

class App extends Component {
  constructor() {
    super();
    this.state = {
      pyrexPatterns: [],
      error: ""
    }
  };

  componentDidMount = () => {
    fetchAllPatterns()
    .then(data => this.setState())
  }

  render() {
    return (
      <main className="App">
        <header className="App-header">
          <h1>Welcome to Pyrex!</h1>
          <img src='https://i.ibb.co/6NJNLMs/download.jpg' className="test-img" alt="balloons" />
          <img src='https://i.ibb.co/nkxVvQr/th-butterflygold1.jpg' className="test-img" alt="butterfly-gold" />

          <p>
            Here is Pyrex!
          </p>

        </header>
      </main>
    );
  }
}

export default App;
