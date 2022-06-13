import React from 'react';
import './AllPyrexContainer.css';
import PatternTile from './PatternTile';
import PropTypes from 'prop-types';

const AllPyrexContainer = ({ patternData, seePatternOptions }) => {
const patternTile = patternData.map(pattern => {
  return (
    <PatternTile
    id={pattern.id}
    key={pattern.id}
    patternName={pattern.name}
    image={pattern.img}
    seePatternOptions={seePatternOptions}
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

AllPyrexContainer.propTypes = {
  seePatternOptions: PropTypes.func,
  patternData: PropTypes.array,
};
