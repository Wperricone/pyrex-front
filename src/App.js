import React, { Component } from 'react';
import './App.css';
import AllPyrexContainer from './AllPyrexContainer';
import PatternTile from './PatternTile';
import { fetchAllPatterns, fetchOnePattern } from './apiCalls'

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
    .then(data => this.setState( {pyrexPatterns: data.patterns }))
    .catch(err => this.setState({ error: "Something went wrong, please try again!" }))
  };

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
        <body>
          <AllPyrexContainer
          patternData={this.state.pyrexPatterns}

          />

        </body>
      </main>
    );
  };
};

export default App;
