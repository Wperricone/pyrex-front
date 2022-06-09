import React, { Component } from 'react';
import './PatternDetail.css';
import { fetchAllPatterns, fetchOnePattern } from './apiCalls'

class PatternDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patternOptions: {}
    }
  };
  // componentDidMount = (id) => {
  //   this.seePatternOptions(this.props.idMatch)
  // };


  render() {
    // console.log("PROPS", this.props);
    // if (!this.props.name) {
    //   return <p>loading...</p>
    // }
    return (
      <section className='pattern-detail'>
        <h2 className='pattern-name'>{this.props.patternOptions.name}
        </h2>
        <img className='pattern-image' src={this.props.patternOptions.img} alt='pattern-image'/>

        <button className='add-to-favorites'> Add To Favorites
        </button>
        <button className='add-to-collection'> Add To My Collection>
        </button>
      </section>
    )
  }
};


export default PatternDetail;
