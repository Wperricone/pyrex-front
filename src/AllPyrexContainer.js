import React from 'react';
import './AllPyrexContainer.css';
import PatternTile from './PatternTile';

const AllPyrexContainer = ({ patternData }) => {
const patternTile = patternData.map(pattern => {
  return (
    <PatternTile
    id={pattern.id}
    key={pattern.id}
    patternName={pattern.name}
    image={pattern.img}
    />
  )
})

  return (
    <div className='patterns-container'>
      {patternTile}
    </div>
  )
};

export default AllPyrexContainer;
