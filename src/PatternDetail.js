import React from 'react';
import './PatternDetail.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PatternDetail = ( props ) => {
  const isInFavs = () => {
    const result = props.favorites.some((favorite) => {
      return  favorite.id === props.uniqueID
    })
      return result
  };
    return (
      <section className='pattern-detail'>
        <h2 className='pattern-name'>{props.patternOptions.name}
        </h2>
        <img className='pattern-image' src={props.patternOptions.img} alt='pattern-image'/>
          {!isInFavs() && <button className='add-to-favorites' onClick={() => props.submitFavorite()}> Add To Favorites
          </button>}
          {isInFavs() && <button className='add-to-favorites' onClick={() => {
             props.deleteFavorite(props.uniqueID)}}> Delete From Favorites
          </button>}
      </section>
    )
};

export default PatternDetail;

PatternDetail.propTypes = {
  patternOptions: PropTypes.object,
  submitFavorite:PropTypes.func,
  addFavorite: PropTypes.array,
  deleteFavorite: PropTypes.func,
  favorites: PropTypes.array,
  uniqueID: PropTypes.string
};
