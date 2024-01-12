import React from 'react';
import { Row, Col } from 'react-bootstrap'; 

const Title = ({ title, titleInEnglish, productionDate }) => {
  return (
    <div>
      <h1>{title}</h1>
      
      <p>{titleInEnglish}  {productionDate}</p>
        
      
    </div>
  );
};

export default Title;