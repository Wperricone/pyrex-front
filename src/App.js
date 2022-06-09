import React, { Component } from 'react';
import './App.css';
import AllPyrexContainer from './AllPyrexContainer';
import PatternTile from './PatternTile';
import NavBar from './NavBar';
import PatternDetail from './PatternDetail';
import Favorites from './Favorites';
import { fetchAllPatterns, fetchOnePattern } from './apiCalls'
import { BrowserRouter, Route } from 'react-router-dom';


class App extends Component {
  constructor() {
    super();
    this.state = {
      pyrexPatterns: [],
      patternOptions: {},
      favorites: [],
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

  addFavorite = (newFavorite) => {
    this.setState({ favorites: [...this.state.favorites, newFavorite] })
  }
  submitFavorite = event => {
    const newFavorite = {
      ...this.state
    }
    this.props.addFavorite(newFavorite);
  }

  render() {
    return (
      <main className="App">
        <NavBar />

        <div>
          <Route exact path="/" render={ () =>
            <AllPyrexContainer
            seePatternOptions={this.seePatternOptions}
            patternData={this.state.pyrexPatterns}
            addFavorite={this.state.favorites}
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
          <Route exact path="/patterns/favorites" render={ () =>
            <Favorites
            addFavorite={this.state.favorites}
            />
          }/>
        </div>
      </main>
    );
  };
};

export default App;
