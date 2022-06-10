import React, { Component } from 'react';
import './App.css';
import AllPyrexContainer from './AllPyrexContainer';
import PatternTile from './PatternTile';
import NavBar from './NavBar';
import PatternDetail from './PatternDetail';
import { fetchAllPatterns, fetchOnePattern } from './apiCalls'
import { BrowserRouter, Route } from 'react-router-dom';


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

  seePatternOptions = (id) => {
    console.log("THERE", id);
    fetchOnePattern(id)
    .then(data => {
      console.log("HERE", data);
      this.setState({ patternOptions: data})
  })

    .catch(err => this.setState({ error: "Something went wrong, please try again" }))
  };

  render() {
    return (
      <main className="App">
        <NavBar />

        <div>
          <Route exact path="/" render={ () =>
            <AllPyrexContainer
            seePatternOptions={this.seePatternOptions}
            patternData={this.state.pyrexPatterns}
            />
          }/>
          {this.state.patternOptions &&
          <Route exact path="/patterns/:id" render={({ match }) =>
              <PatternDetail
              patternOptions={this.state.patternOptions}
              seePatternOptions={this.seePatternOptions}
              // idMatch={parseInt(match.params.id)}
              />
            }/>
          }
        </div>
      </main>
    );
  };
};

export default App;
