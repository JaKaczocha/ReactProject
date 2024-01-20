import React from 'react';
import Button from 'react-bootstrap/Button';
import { useLocation, useNavigate } from 'react-router-dom';

const AddFilmButton = ({ login, isLoggedIn, token}) => {
  const navigate = useNavigate();



  const handleAddFilmClick = () => {
    // Navigate to the AddFilm component and pass login and isLoggedIn as state
    for(let i = 0; i < 100; i++ ) {
      console.log('login: ' + login);
    console.log('logged: ' + isLoggedIn);
    console.log('sssss ');
    }
    
    navigate('/add', { state: { login: login, isLoggedIn, token } });
  };

  return (
    <Button variant="primary" onClick={handleAddFilmClick} style={{ backgroundColor: '#a53b5b', marginRight: '1rem' }}>
      Dodaj film
    </Button>
  );

};

export default AddFilmButton;