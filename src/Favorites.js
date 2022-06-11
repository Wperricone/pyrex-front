import React, { Component } from 'react';
import { fetchAllPatterns, fetchOnePattern, deleteFavorite, postFavorite } from './apiCalls';
import './Favorites.css';


class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: this.props.favorites,
    }
  };

  componentDidMount () {
    fetchAllPatterns()
    .then(data => {
      console.log("FAVVVVSSS", data.patterns.favorites)
      this.setState ( {favorites: data.patterns.favorites})
    })
  };

  componentDidUpdate = () => {
    fetchAllPatterns()
  };

stageFavorites = () => {
};
render () {
  const favs = this.state.favorites.map(pattern => {
    return (<section key={pattern.id} className='favorites-detail'>
        <h3 className='favorites-name'>{pattern.name}
        </h3>
        <img className='favorites-image' src={pattern.img} alt='pattern-image'/>


        <button className='delete-from-favorites' onClick={() =>
           this.props.deleteFavorite(this.props.favorites.id)}> Delete From Favorites
        </button>
        <button className='add-to-collection'> Add To My Collection
        </button>
      </section>)
  })
  console.log("FAVS", favs)
  if (this.state.favorites.length) {
    return (<div>{favs}</div>)
  } else {
  return
   <p>No Patterns in Your Favorites Yet</p>
}
}
  };


export default Favorites;
