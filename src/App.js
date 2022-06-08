import React, { Component } from 'react';
import './App.css';
import AllPyrexContainer from './AllPyrexContainer';
import PatternTile from './PatternTile';
import NavBar from './NavBar';
import PatternDetail from './PatternDetail';
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
        <NavBar />

        <div>

          <AllPyrexContainer
          patternData={this.state.pyrexPatterns}
          />
          <PatternDetail
          seePatternOptions={this.seePatternOptions}
          />

        </div>
      </main>
    );
  };
};

export default App;
