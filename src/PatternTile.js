import React from 'react';
import './PatternTile.css';
import { Link } from 'react-router-dom';

const PatternTile = ({ id, patternName, image, seePatternOptions, submitFavorite, addFavorite }) => {
  return (
    <div className='tile'>
      <div className='tile'>
        <div className='pattern-img'>
          <img src={image} alt="pattern-image"/>
        </div>
        <h3 className="pattern-name">{patternName}</h3>
        < Link to={`/patterns/${id}`}>
          <button className='see-more' onClick={() => seePatternOptions(id)}>Click here for more options!
          </button>
        </Link>
      </div>
    </div>
  )
};

export default PatternTile;
