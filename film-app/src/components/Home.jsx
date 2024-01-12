import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Logo from './Logo';
import SearchEngine from './SearchEngine';
import LoginButton from './LoginButton';
import Film from './Film';
import Footer from './Footer';
import './css/Home.css';
import LogoutButton from './LogoutButton';
import SignIn from './SignIn';
import { Link } from 'react-router-dom';
import AddFilmButton from './AddFilmButton';

const Home = () => {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [login, setLogin] = useState('');
  const [films, setFilms] = useState([]);

  useEffect(() => {
    if (location.state && location.state.isLoggedIn !== undefined) {
      setIsLoggedIn(location.state.isLoggedIn);
      setLogin(location.state.login || '');
    }

    // Fetch movies from the API
    fetch('https://at.usermd.net/api/movies')
      .then(response => response.json())
      .then(data => setFilms(data))
      .catch(error => console.error('Error fetching movies:', error));
  }, [location.state]);

  
  
  return (
    <div className="App">
      <div className="header">
        <Logo />
        <SearchEngine />
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {isLoggedIn ? (
            <div id='buttonsH' style={{ display: 'flex', alignItems: 'center' }}>
              <LogoutButton  />
              
              <AddFilmButton isLoggedIn={isLoggedIn}/>
              <p style={{ margin: '0 0 0 40px' }}>Welcome, {login}!</p>
            </div>
          ) : (
            <div>
              <LoginButton />
              {isLoggedIn && <AddFilmButton style={{ marginLeft: '20px' }} />}
            </div>
          )}
        </div>
      </div>
      <div className="content" id="content">
        <div className="film-grid">
          {films.map((film, index) => (
            <Film key={index} {...film} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;