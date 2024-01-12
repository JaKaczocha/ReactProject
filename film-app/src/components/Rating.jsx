import React from 'react';
import star from '../../src/res/star.png'; 

const Rating = ({ rate}) => { 
  return (
    <div style={{ display: 'flex', alignItems: 'center'}}>
      <img src={star} alt="star icon" width="60" height="50" /> 
      
      <p className="small"style={{ marginLeft: '5px' }}>ocena: {rate}</p> 
    </div>
  );
};

export default Rating;