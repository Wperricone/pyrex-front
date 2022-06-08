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
  componentDidMount = (id) => {
    this.seePatternOptions(this.props.idMatch)
  };

  seePatternOptions = (id) => {
    fetchOnePattern(id)
    .then(data => this.setState({ patternOptions: data.pattern}))
    .catch(err => this.setState({ error: "Something went wrong, please try again" }))
  };

  render() {
    return (
      <section className='pattern-detail'>
        <img className='pattern-image' src={this.state.patternOptions.image} alt='pattern-image'/>
        <button className='add-to-favorites'> Add To Favorites
        </button>
        <button className='add-to-collection'> Add To My Collection>
        </button>
      </section>
    )
  }

}


export default PatternDetail;
