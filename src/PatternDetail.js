import React from 'react';
import './PatternDetail.css';
import { Link } from 'react-router-dom';
import { fetchAllPatterns, fetchOnePattern } from './apiCalls'

const PatternDetail = ( props, {submitFavorite, addFavorite} ) => {

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
        <Link to={'patterns/favorites'}>
          <button className='add-to-favorites' onClick={(event) => props.submitFavorite(event)}> Add To Favorites
          </button>
        </Link>
        <button  className='add-to-collection'> Add To My Collection
        </button>
      </section>
    )

};


export default PatternDetail;
