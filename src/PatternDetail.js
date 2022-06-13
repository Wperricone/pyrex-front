import React from 'react';
import './PatternDetail.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';



const PatternDetail = ( props ) => {



const isInFavs = () => {
  console.log("JOSH", props.favorites);
  const result = props.favorites.some((favorite) => {
    console.log("FAVORITE", favorite.id)
    console.log("PROPS.UNI", props.uniqueID);
  return  favorite.id === props.uniqueID
  })
  return result
}


    return (
      <section className='pattern-detail'>
        {props.uniqueID && console.log("PROPSSSS", props.uniqueID)}
        <h2 className='pattern-name'>{props.patternOptions.name}
        </h2>
        <img className='pattern-image' src={props.patternOptions.img} alt='pattern-image'/>

          {!isInFavs() && <button className='add-to-favorites' onClick={() => props.submitFavorite()}> Add To Favorites
          </button>}
          {isInFavs() && <button className='add-to-favorites' onClick={() => {
             props.deleteFavorite(props.uniqueID)}}> Delete From Favorites
          </button>}


        <button  className='add-to-collection' onClick={() =>
        props.submitToCollection()}> Add To My Collection
        </button>

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
