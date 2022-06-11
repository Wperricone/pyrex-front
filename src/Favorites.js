import React from 'react';
import './Favorites.css';

const Favorites = (props) => {

  {return (
    props.favorites.length ?
    <section className='favorites-detail'>
      <h2 className='favorites-name'>{props.favorites[0].name}
      </h2>
      <img className='favorites-image' src={props.favorites[0].img} alt='pattern-image'/>

      <button className='delete-from-favorites'> Delete From Favorites
      </button>
      <button className='add-to-collection'> Add To My Collection
      </button>
    </section>
    : <p>No Patterns in Your Favorites Yet</p>)
  }
  <></>

}

export default Favorites;
