import React from 'react';
import './PatternDetail.css';
import { Link } from 'react-router-dom';


const PatternDetail = ( props, {submitFavorite, addFavorite, submitToCollection, addToCollection, deleteFavorite, favorites} ) => {

  // componentDidMount = (id) => {
  //   this.seePatternOptions(this.props.idMatch)
  // };



    //console.log("PROPS", props.id);
    // if (!this.props.name) {
    //   return <p>loading...</p>
    // }
    return (
      <section className='pattern-detail'>

        <h2 className='pattern-name'>{props.patternOptions.name}
        </h2>
        <img className='pattern-image' src={props.patternOptions.img} alt='pattern-image'/>
        <Link to={'/favorites'}>
          <button className='add-to-favorites' onClick={(event) => props.submitFavorite(event)}> Add To Favorites
          </button>
          </Link>
          <Link to={'/favorites'}>
        <button  className='add-to-collection' onClick={(event) =>
        props.submitToCollection(event)}> Add To My Collection
        </button>
        </Link>
      </section>
    )

};


export default PatternDetail;
