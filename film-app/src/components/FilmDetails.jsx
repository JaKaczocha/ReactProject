import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Logo from './Logo';
import SearchEngine from './SearchEngine';
import LoginButton from './LoginButton';
import Footer from './Footer';
import SignIn from './SignIn';
import AddFilmButton from './AddFilmButton';
import './css/FilmDetails.css';
import { useLocation, useNavigate } from 'react-router-dom';
import LogoutButton from './LogoutButton';
import Button from 'react-bootstrap/Button';

const FilmDetails = () => {
  const { idFilmu } = useParams();
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [login, setLogin] = useState('');
  const [token, setToken] = useState('');
  const location = useLocation();
  const navigate = useNavigate(); // Use useNavigate from react-router-dom

  const handleDeleteFilm = async () => {
    try {
      const response = await fetch(`https://at.usermd.net/api/movie/${idFilmu}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (response.ok) {
        // Film deleted successfully, you can navigate to a different page or handle it accordingly
        navigate('/', { state: { login, isLoggedIn,token } });
        console.log('Film deleted successfully');
      } else {
        console.error('Failed to delete film');
      }
    } catch (error) {
      console.error('Error deleting film:', error);
    }
  };

  useEffect(() => {
    if (location.state && location.state.isLoggedIn !== undefined) {
      setIsLoggedIn(location.state.isLoggedIn);
      setLogin(location.state.login || 'k');
      const extractedToken = location.state.token || '';
      setToken(extractedToken);
    }

    

    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`https://at.usermd.net/api/movies/${idFilmu}`);
        const data = await response.json();
        setSelectedFilm(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
        setSelectedFilm(null);
      }
    };

    fetchMovieDetails();
  }, [location.state]);

  return (
    <div className="App">
      <div className="content">
        {selectedFilm ? (
          <div>
            <div className="header">
            <Logo login={login} isLoggedIn={isLoggedIn} token={token}/>
              
              <div style={{ display: 'flex', alignItems: 'center' }}>
          {isLoggedIn ? (
            <div id='buttonsH' style={{ display: 'flex', alignItems: 'center' }}>
              <LogoutButton />
              <Button
  variant="danger"
  onClick={handleDeleteFilm}
  style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}
>
  DO KOSZA
</Button>
              <AddFilmButton login={login} isLoggedIn={isLoggedIn} token={token} />
              
              <p style={{ margin: '0 0 0 40px' }}>Witaj {login}!</p>
            </div>
          ) : (
            <div>
              <LoginButton />
              {isLoggedIn && <AddFilmButton style={{ marginLeft: '20px' }} login={login} isLoggedIn={isLoggedIn} token={token}/>}
            </div>
          )}
        </div>
            </div>
            <div className="content movie-details" id="content" style={{ display: 'flex' }}>
            <div style={{ flexBasis: '400px', marginRight: '20px' }}>
  <img src={selectedFilm.image} alt={selectedFilm.title} style={{ width: '350px', height: '500px' }} />
</div>
  <div>
    <h2>{selectedFilm.title}</h2>
    <p>Production Date: {selectedFilm.productionYear}</p>
    <p>Genre: {selectedFilm.genre}</p>
    <p>Rate: {selectedFilm.rate}</p>
    <p>Content: {selectedFilm.content}</p>
    {/* Add other details you want to display */}
  </div>
</div>
            <Footer />
          </div>
        ) : (
          <div>
            <p>Film with ID {idFilmu} not found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilmDetails;