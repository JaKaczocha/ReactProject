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
import Sorting from './Sorting';
import {  useNavigate } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [login, setLogin] = useState('');
  const [token, setToken] = useState('');
  const [films, setFilms] = useState([]);
  const [sortType, setSortType] = useState('default'); 
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state && location.state.isLoggedIn !== undefined) {
      setIsLoggedIn(location.state.isLoggedIn);
      setLogin(location.state.login || '');
      const extractedToken = location.state.token || '';
      setToken(extractedToken);
    }

    // Fetch movies from the API
    fetch('https://at.usermd.net/api/movies')
      .then(response => response.json())
      .then(data => setFilms(data))
      .catch(error => console.error('Error fetching movies:', error));
  }, [location.state]);

  const handleSearch = (text) => {
    setSearchText(text);
  };

  console.log("l:" + login);
  // Filter films based on search text
  const filteredFilms = films.filter((film) =>
    film.title.toLowerCase().includes(searchText.toLowerCase())
  );

  // Sorting logic
  const sortedFilms = [...filteredFilms];
  if (sortType === 'title asc') {
    sortedFilms.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortType === 'title desc') {
    sortedFilms.sort((a, b) => b.title.localeCompare(a.title));
  } else if (sortType === 'rating asc') {
    sortedFilms.sort((a, b) => (a.rate || 0) - (b.rate || 0));
  } else if (sortType === 'rating desc') {
    sortedFilms.sort((a, b) => (b.rate || 0) - (a.rate || 0));
  }

  const handleSortChange = newSortType => {
    setSortType(newSortType);
  };
  

  return (
    <div className="App">
      <div className="header">
        <Logo />
        <Sorting onSortChange={handleSortChange} />
        <SearchEngine onSearch={handleSearch} /> {/* Pass onSearch function to SearchEngine */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {isLoggedIn ? (
            <div id='buttonsH' style={{ display: 'flex', alignItems: 'center' }}>
              <LogoutButton />
              
              <AddFilmButton login={login} isLoggedIn={isLoggedIn} token={token} />
              
              <p style={{ margin: '0 0 0 40px' }}>Witaj, {login}!</p>
            </div>
          ) : (
            <div>
              <LoginButton />
              {isLoggedIn && <AddFilmButton style={{ marginLeft: '20px' }} login={login} isLoggedIn={isLoggedIn} token={token}/>}
            </div>
          )}
        </div>
      </div>
      <div className="content" id="content">
        <div className="film-grid">
          {sortedFilms.map((film, index) => (
          <Film
            key={index}
            token={token}
            isLoggedIn={isLoggedIn}
            login={login}
            {...film}
            
          />
        ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;