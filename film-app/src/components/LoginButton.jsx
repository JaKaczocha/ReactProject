import React from 'react';
import Button from 'react-bootstrap/Button';
import loginB from '../../src/res/loginB.svg'; // importuj obrazek logowania

const LoginButton = () => {
  return (
    <Button variant="primary" style={{ display: 'flex', alignItems: 'center', backgroundColor: '#a53b5b' }}>
      <img src={loginB} alt="Login" style={{ width: '20px', marginRight: '10px' }} /> Zaloguj się
    </Button>
  );
};

export default LoginButton;