import React from 'react';
import './Favorites.css';

const Favorites = (props) => {

const stageFavorites =
  props.favorites.map(pattern => {

    console.log("FAVS", props.favorites)
  return (<section className='favorites-detail'>
      <h3 className='favorites-name'>{pattern.name}
      </h3>
      <img className='favorites-image' src={pattern.img} alt='pattern-image'/>


      <button className='delete-from-favorites' onClick={() =>
         props.deleteFavorite(props.favorites.id)}> Delete From Favorites
      </button>
      <button className='add-to-collection'> Add To My Collection
      </button>
    </section>)
  })
  return (props.favorites.length ?
  <p>{stageFavorites}</p>: <p>No Patterns in Your Favorites Yet</p>)
  }


export default Favorites;
