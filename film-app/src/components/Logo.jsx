import React from 'react';
import logo from '../../src/res/logo.svg';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Logo = ({ login, isLoggedIn, token}) => {
    const navigate = useNavigate();



    const handleLogoClick = () => {
      
      for(let i = 0; i < 100; i++ ) {
        console.log('login: ' + login);
      console.log('logged: ' + isLoggedIn);
      console.log('sssss ');
      }
      
      navigate('/', { state: { login: login, isLoggedIn, token} });
    };
  
    return (
      <div className="logo-container" onClick={handleLogoClick}>
        <img src={logo} alt="Logo" />
        </div>
    );
 
};

export default Logo;