import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Title = ({ title, titleInEnglish, productionDate }) => {
  // Calculate font size based on the length of the title
  const calculateFontSize = () => {
    const maxLength = 20; 
    const defaultFontSize = 26;
    const reductionFactor = 0.75; 

    return Math.max(defaultFontSize - (title.length - maxLength) * reductionFactor, defaultFontSize);
  };

  return (
    <div>
      <h3 style={{ fontSize: calculateFontSize() }}>{title}</h3>
      <p style={{ fontSize: calculateFontSize() }}>{titleInEnglish} {productionDate}</p>
    </div>
  );
};

export default Title;