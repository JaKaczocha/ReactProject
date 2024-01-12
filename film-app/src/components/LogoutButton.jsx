import React from 'react';
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';

const LogoutButton = () => {
  return (
    <Link to="/signin" style={{ textDecoration: 'none' }}>
      <Button variant="primary" style={{ marginRight: 10,display: 'flex', alignItems: 'center', backgroundColor: '#a53b5b' }}>
         Wyloguj się
      </Button>
    </Link>
  );
};

export default LogoutButton;