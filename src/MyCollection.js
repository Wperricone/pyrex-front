import React from 'react';
import './MyCollection.css';

const MyCollection = (props) => {
console.log("COLL", props.collection);

const stageCollection =
   props.collection.map(pattern => {
     console.log(pattern.name);
return (<section className='collection-detail'>
    <h3 className='collection-name'>{pattern.name}
    </h3>
    <img className='collection-image' src={pattern.img} alt='pattern-image'/>
    <button className='delete-from-collection'> Delete From My Collection
    </button>
    <button className='add-to-favorites'> Add To Favorites
    </button>
  </section>)
})

console.log("STAGE", stageCollection)
    return (props.collection.length ?
    <p>{stageCollection}</p>: <p className='no-patterns'>No Patterns in Your Collection Yet</p>)

}

export default MyCollection;
