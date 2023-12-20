import React from 'react';
import Button from 'react-bootstrap/Button';
import loginB from '../../src/res/loginB.svg'; // importuj obrazek logowania
import { Link } from 'react-router-dom';

const LoginButton = () => {
  return (
    <Link to="/signin" style={{ textDecoration: 'none' }}>
      <Button variant="primary" style={{ display: 'flex', alignItems: 'center', backgroundColor: '#a53b5b' }}>
        <img src={loginB} alt="Login" style={{ width: '20px', marginRight: '10px' }} /> Zaloguj się
      </Button>
    </Link>
  );
};

export default LoginButton;