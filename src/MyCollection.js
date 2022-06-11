import React from 'react';
import './MyCollection.css';

const MyCollection = (props) => {
console.log("COLL", props.collection);

    {return (props.collection.length ?
    <section className='collection-detail'>
      <h2 className='collection-name'>{props.collection[0].name}
      </h2>
      <img className='collection-image' src={props.collection[0].img} alt='pattern-image'/>

      <button className='delete-from-collection'> Delete From My Collection
      </button>
      <button className='add-to-favorites'> Add To Favorites
      </button>
    </section>
    : <p>No Patterns in Your Collection Yet</p>)
  }
 <></>


}

export default MyCollection;
