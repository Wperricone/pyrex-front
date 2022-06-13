import React, { Component } from 'react';
import './App.css';
import AllPyrexContainer from './AllPyrexContainer';
import PatternTile from './PatternTile';
import NavBar from './NavBar';
import PatternDetail from './PatternDetail';
import Favorites from './Favorites';
import MyCollection from './MyCollection';
import { fetchAllPatterns, fetchOnePattern, deleteFavorite, postFavorite } from './apiCalls'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pyrexPatterns: [],
      patternOptions: {},
      favorites: [],
      collection: [],
      errors: false,
      specificPatternID: ""
    }
  };

  componentDidMount () {
    this.refresh()
  };

  refresh = () => {
    fetchAllPatterns()
    .then ((data) => this.setState( {pyrexPatterns: data.patterns.patterns, favorites: data.patterns.favorites }))
    .catch(err => this.setState({ error: "Something went wrong, please try again!" }))
  }

  seePatternOptions = (id) => {
    fetchOnePattern(id)
    .then(data => {
      this.setState({ patternOptions: data})
      this.setState({specificPatternID: id})
  })
    .catch(err => this.setState({ error: "Something went wrong, please try again" }))
  };

  addFavorite = (newFavorite) => {
    this.setState({
      ...this.state,
      favorites: [...this.state.favorites, newFavorite],
    }, () => {this.saveFav(this.state.favorites)} )
  };

  submitFavorite = () => {
    const newFavorite = this.state.patternOptions;
    this.addFavorite(newFavorite);
  };

  saveFav = () => {
    const findPattern = this.state.favorites.find(favorite => favorite.id === this.state.specificPatternID)
    postFavorite(findPattern.id, findPattern.name, findPattern.img)
  };

  deleteFavorite = (id) => {
    deleteFavorite(id)
    .then(() => {this.refresh()})
    .catch(error => this.setState({errors:"Unable to delete right now, please try again!"}))
  };

  render() {
    return (
      <main className="App">
        <NavBar />
          { this.state.errors ? <h3> {this.state.errors} </h3> :
            <section className='main-section'>
          <Switch>
            <Route exact path="/" render={ () =>
              <AllPyrexContainer
              seePatternOptions={this.seePatternOptions}
              patternData={this.state.pyrexPatterns}
              />
            }/>
            {this.state.patternOptions &&
            <Route exact path="/patterns/:id" render={() =>
                <PatternDetail
                patternOptions={this.state.patternOptions}
                submitFavorite={this.submitFavorite}
                addFavorite={this.addFavorites}
                deleteFavorite={this.deleteFavorite}
                favorites={this.state.favorites}
                uniqueID={this.state.specificPatternID}
                />
              }/>
            }
            <Route exact path="/favorites" render={ () =>
              <div className ='favs-container'>
              <h2 className='favs-title'>Favorites</h2>
              <div className='all-favs-container'>
              <Favorites
              favorites={this.state.favorites}
              deleteFavorite={this.deleteFavorite}
            />
              </div>
              </div>
            }/>
            <Route render={() => <h2>Looks like you took a wrong turn, click Home to go back!</h2>}
            />
          </Switch>
          </section>
        }
      </main>
    );
  };
};

export default App;
