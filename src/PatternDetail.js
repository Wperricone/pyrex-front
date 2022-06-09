import React from 'react';
import './PatternDetail.css';
import { fetchAllPatterns, fetchOnePattern } from './apiCalls'

const PatternDetail = ( props ) => {

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
        <Link
        <button className='add-to-favorites'> Add To Favorites
        </button>
        <button className='add-to-collection'> Add To My Collection
        </button>
      </section>
    )

};


export default PatternDetail;
