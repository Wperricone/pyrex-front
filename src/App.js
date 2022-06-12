import React, { Component } from 'react';
import './App.css';
import AllPyrexContainer from './AllPyrexContainer';
import PatternTile from './PatternTile';
import NavBar from './NavBar';
import PatternDetail from './PatternDetail';
import Favorites from './Favorites';
import MyCollection from './MyCollection';
import { fetchAllPatterns, fetchOnePattern, deleteFavorite, postFavorite } from './apiCalls'
import { BrowserRouter, Route } from 'react-router-dom';


class App extends Component {
  constructor() {
    super();
    this.state = {
      pyrexPatterns: [],
      patternOptions: {},
      favorites: [],
      collection: [],
      error: "",
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
    console.log("ID", id);
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
    .then(data => console.log("DAAAATA", data)

  )
    console.log("SPEC", this.state.specificPatternID);
    console.log("POOP", findPattern);
  };


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
    console.log("ID", id);
    deleteFavorite(id)
    .then(() => {this.refresh()})

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
              uniqueID={this.state.specificPatternID}


              //idMatch={parseInt(match.params.id)}
              />
            }/>
          }

          <Route exact path="/favorites" render={ () =>
            <div>
            <h2 className='favs-title'>Favorites</h2>

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
