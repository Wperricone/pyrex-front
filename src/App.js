import React, { Component } from 'react';
import './App.css';
import AllPyrexContainer from './AllPyrexContainer';
import PatternTile from './PatternTile';
import NavBar from './NavBar';
import PatternDetail from './PatternDetail';
import Favorites from './Favorites';
import MyCollection from './MyCollection';
import { fetchAllPatterns, fetchOnePattern, deleteFavorite } from './apiCalls'
import { BrowserRouter, Route } from 'react-router-dom';


class App extends Component {
  constructor() {
    super();
    this.state = {
      pyrexPatterns: [],
      patternOptions: {},
      favorites: [],
      collection: [],
      error: ""
    }
  };


  componentDidMount = () => {
    fetchAllPatterns()
    .then(data => {console.log("DATA", data)
    this.setState( {pyrexPatterns: data.patterns.patterns })})
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
    this.setState({
      ...this.state,
      favorites: [...this.state.favorites, newFavorite] })
  }
  submitFavorite = (event) => {
    const newFavorite = this.state.patternOptions;
    this.addFavorite(newFavorite);
  }

  addToCollection = (newCollect) => {
    this.setState({
      ...this.state,
      collection: [...this.state.collection, newCollect] })
  }
  submitToCollection = (event) => {
    const newCollect = this.state.patternOptions;
    this.addToCollection(newCollect);
  }

  deleteFavorite = (id) => {
    deleteFavorite(id)
    .then(() => this.componentDidMount())
    .catch(error => this.setState({errors:"Unable to delete right now, please try again!"}))
  }

  render() {
    return (
      <main className="App">
        <NavBar />

        <section>
          <Route exact path="/" render={ () =>
            <AllPyrexContainer
            seePatternOptions={this.seePatternOptions}
            patternData={this.state.pyrexPatterns}
            addFavorite={this.state.favorites}
            addToCollection={this.addToCollection}
            deleteFavorite={this.deleteFavorite}
            favorites={this.state.favorites}


            />
          }/>
          {this.state.patternOptions &&
          <Route exact path="/patterns/:id" render={() =>
              <PatternDetail
              patternOptions={this.state.patternOptions}
              seePatternOptions={this.seePatternOptions}
              submitFavorite={this.submitFavorite}
              addFavorite={this.addFavorites}
              submitToCollection={this.submitToCollection}
              addToCollection={this.addToCollection}
              deleteFavorite={this.deleteFavorite}
              favorites={this.state.favorites}

              //idMatch={parseInt(match.params.id)}
              />
            }/>
          }
          <Route exact path="/favorites" render={ () =>
            <div>
            <h2>Favorites</h2>

            <Favorites
            favorites={this.state.favorites}
            collection={this.state.collection}
            deleteFavorite={this.deleteFavorite}
            />
            <h2>My Collection</h2>
            <MyCollection
            favorites={this.state.favorites}
            collection={this.state.collection}
            />

            </div>
          }/>
          </section>
      </main>
    );
  };
};

export default App;
