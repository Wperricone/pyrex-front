import React from 'react';
import './PatternDetail.css';
import { Link } from 'react-router-dom';


const PatternDetail = ( props, {submitFavorite, addFavorite, submitToCollection, addToCollection, deleteFavorite, favorites, uniqueID} ) => {

  // componentDidMount = (id) => {
  //   this.seePatternOptions(this.props.idMatch)
  // };



    //console.log("PROPS", props.id);
    // if (!this.props.name) {
    //   return <p>loading...</p>
    // }
    return (
      <section className='pattern-detail'>
        {uniqueID && console.log("PROPSSSS", uniqueID)}
        <h2 className='pattern-name'>{props.patternOptions.name}
        </h2>
        <img className='pattern-image' src={props.patternOptions.img} alt='pattern-image'/>

          <button className='add-to-favorites' onClick={() => props.submitFavorite()}> Add To Favorites
          </button>


        <button  className='add-to-collection' onClick={() =>
        props.submitToCollection()}> Add To My Collection
        </button>

      </section>
    )

};


export default PatternDetail;
