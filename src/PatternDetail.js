import React from 'react';
import './PatternDetail.css';
import { Link } from 'react-router-dom';


const PatternDetail = ( props ) => {

  // componentDidMount = (id) => {
  //   this.seePatternOptions(this.props.idMatch)
  // };

const isInFavs = () => {
  console.log("WHU", props.favorites)
  return props.favorites.some((favorite) => {
  return  favorite.id === props.uniqueID
  })
}

    //console.log("PROPS", props.id);
    // if (!this.props.name) {
    //   return <p>loading...</p>
    // }
    return (
      <section className='pattern-detail'>
        {props.uniqueID && console.log("PROPSSSS", props.uniqueID)}
        <h2 className='pattern-name'>{props.patternOptions.name}
        </h2>
        <img className='pattern-image' src={props.patternOptions.img} alt='pattern-image'/>

          {!isInFavs() && <button className='add-to-favorites' onClick={() => props.submitFavorite()}> Add To Favorites
          </button>}
          {isInFavs() && <button className='add-to-favorites' onClick={() => {
            console.log("UNIQ", props.uniqueID)
             props.deleteFavorite(props.uniqueID)}}> Delete From Favorites
          </button>}


        <button  className='add-to-collection' onClick={() =>
        props.submitToCollection()}> Add To My Collection
        </button>

      </section>
    )

};


export default PatternDetail;
