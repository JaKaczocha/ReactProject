import React from 'react';
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';

const AddFilmButton = () => {
  return (
    <Link to="/add"  style={{ textDecoration: 'none' }}>
      <Button variant="primary" style={{ display: 'flex', alignItems: 'center', backgroundColor: '#a53b5b' }}>
        Add Film
      </Button>
    </Link>
  );
};

export default AddFilmButton;