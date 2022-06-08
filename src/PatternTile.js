import React from 'react';
import './PatternTile.css';

const PatternTile = ({ id, patternName, image }) => {
  return (
    <div className='tile'>
      <div className='pattern-img'>
        <img src={image} alt="pattern-image"/>
      </div>
      <h3 className="pattern-name">{patternName}</h3>
    </div>
  )
};

export default PatternTile;
