import React from 'react';
import './Favorites.css'

const Favorites = ({ id, patternName, image, seePatternOptions }) => {

return (
  <section className='favorites-detail'>
    <h2 className='favorites-name'>{this.props.favorites.name}
    </h2>
    <img className='favorites-image' src={this.props.favorites.img} alt='pattern-image'/>

    <button className='delete-from-favorites'> Delete From Favorites
    </button>
    <button className='add-to-collection'> Add To My Collection
    </button>
  </section>
)
}

export default Favorites;
