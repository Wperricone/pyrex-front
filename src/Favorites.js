import React from 'react';
import { fetchAllPatterns, fetchOnePattern, deleteFavorite, postFavorite } from './apiCalls';
import './Favorites.css';

const Favorites = ( {favorites, collection, deleteFavorite} ) => {


  const stageFavorites = () => {

    const favs = favorites.map(pattern => {
      return (<section key={pattern.id} className='favorites-detail'>
          <h3 className='favorites-name'>{pattern.name}
          </h3>
          <img className='favorites-image' src={pattern.img} alt='pattern-image'
          />
          <button className='delete-from-favorites' onClick={() => deleteFavorite(pattern.id)
             }> Delete From Favorites
          </button>
          <button className='add-to-collection'> Add To My Collection
          </button>
        </section>)
    })
    console.log("FAVS", favs)
    if (favorites.length) {
      return (<div>{favs}</div>)
    } else {
    return
     <p>No Patterns in Your Favorites Yet</p>
    }
  }
  return (
    stageFavorites()
  )
};


export default Favorites;
