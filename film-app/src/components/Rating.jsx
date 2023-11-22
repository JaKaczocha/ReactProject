import React from 'react';
import star from '../../src/res/star.png'; 

const Rating = ({ ratingValue, ratingCount }) => { 
  return (
    <div style={{ display: 'flex', alignItems: 'center'}}>
      <img src={star} alt="star icon" width="60" height="50" /> 
      <h2>{ratingValue}</h2> 
      <p className="small"style={{ marginLeft: '5px' }}>Liczba ocen: {ratingCount}</p> 
    </div>
  );
};

export default Rating;