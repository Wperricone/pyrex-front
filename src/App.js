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
    fetchOnePattern(id)
    .then(data => {
      this.setState({ patternOptions: data})
  })

    .catch(err => this.setState({ error: "Something went wrong, please try again" }))
  };

  addFavorite = (newFavorite) => {
    this.setState({ favorites: [...this.state.favorites, newFavorite] })
  }
  submitFavorite = (event) => {
    const newFavorite = this.state.patternOptions;
    console.log(newFavorite);
    this.addFavorite(newFavorite);
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
          <Route exact path="/patterns/:id" render={() =>
              <PatternDetail
              patternOptions={this.state.patternOptions}
              seePatternOptions={this.seePatternOptions}
              submitFavorite={this.submitFavorite}
              addFavorite={this.addFavorites}
              //idMatch={parseInt(match.params.id)}
              />
            }/>
          }
          <Route exact path="/patterns/favorites" render={ () =>
            <Favorites
            favorites={this.state.favorites}
            submitFavorite={this.submitFavorite}
            addFavorite={this.addFavorites}
            />
          }/>
        </div>
      </main>
    );
  };
};

export default App;
