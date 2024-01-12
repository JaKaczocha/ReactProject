import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Logo from './Logo';
import SearchEngine from './SearchEngine';
import LoginButton from './LoginButton';
import Footer from './Footer';
import MovieTrailer from './Demo';
import './css/FilmDetails.css';

const FilmDetails = () => {
  const { idFilmu } = useParams();
  const [selectedFilm, setSelectedFilm] = useState(null);

  useEffect(() => {
    // Fetch movie details using the provided API endpoint
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
  }, [idFilmu]);

  return (
    <div className="App">
      <div className="content">
        {selectedFilm ? (
          <div>
            <div className="header">
              <Logo />
              <SearchEngine />
              <LoginButton />
            </div>
            <div className="content movie-details" id="content">
              <h2>{selectedFilm.title}</h2>
              <img src={selectedFilm.image} alt={selectedFilm.title} />
              
              <p>Production Date: {selectedFilm.productionYear}</p>
              <p>Genre: {selectedFilm.genre}</p>
              <p>Content: {selectedFilm.content}</p>
              {/* Add other details you want to display */}
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