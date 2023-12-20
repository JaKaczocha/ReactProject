import React, { useState } from 'react';
import Logo from './Logo';
import SearchEngine from './SearchEngine';
import LoginButton from './LoginButton';
import Film from './Film';
import Footer from './Footer';
import './css/Home.css';

const Home = () => {
    const films = [ // dodaj tablicę z danymi filmów
    { idFilmu: '1', videoId: 'oyRxxpD3yNw?si=nFA94t4BYLshlpey', ratingValue: '8.5', ratingCount: '1000', title: 'Film 1', titleInEnglish: 'Film 1', productionDate: '2020', genre: 'Akcja', director: 'Reżyser 1' },
    { idFilmu: '2',videoId: 'oyRxxpD3yNw?si=nFA94t4BYLshlpey', ratingValue: '7.5', ratingCount: '2000', title: 'Film 2', titleInEnglish: 'Film 2', productionDate: '2021', genre: 'Komedia', director: 'Reżyser 2' },
    { idFilmu: '3',videoId: 'oyRxxpD3yNw?si=nFA94t4BYLshlpey', ratingValue: '9.0', ratingCount: '3000', title: 'Film 3', titleInEnglish: 'Film 3', productionDate: '2022', genre: 'Dramat', director: 'Reżyser 3' },
    { idFilmu: '4',videoId: 'oyRxxpD3yNw?si=nFA94t4BYLshlpey', ratingValue: '8.0', ratingCount: '4000', title: 'Film 4', titleInEnglish: 'Film 4', productionDate: '2023', genre: 'Thriller', director: 'Reżyser 4' },
    { idFilmu: '5',videoId: 'oyRxxpD3yNw?si=nFA94t4BYLshlpey', ratingValue: '8.5', ratingCount: '1000', title: 'Film 1', titleInEnglish: 'Film 1', productionDate: '2020', genre: 'Akcja', director: 'Reżyser 1' },
    { idFilmu: '6',videoId: 'oyRxxpD3yNw?si=nFA94t4BYLshlpey', ratingValue: '7.5', ratingCount: '2000', title: 'Film 2', titleInEnglish: 'Film 2', productionDate: '2021', genre: 'Komedia', director: 'Reżyser 2' },
    { idFilmu: '7',videoId: 'oyRxxpD3yNw?si=nFA94t4BYLshlpey', ratingValue: '9.0', ratingCount: '3000', title: 'Film 3', titleInEnglish: 'Film 3', productionDate: '2022', genre: 'Dramat', director: 'Reżyser 3' },
    { idFilmu: '8',videoId: 'oyRxxpD3yNw?si=nFA94t4BYLshlpey', ratingValue: '8.0', ratingCount: '4000', title: 'Film 4', titleInEnglish: 'Film 4', productionDate: '2023', genre: 'Thriller', director: 'Reżyser 4' },
    { idFilmu: '9',videoId: 'oyRxxpD3yNw?si=nFA94t4BYLshlpey', ratingValue: '8.5', ratingCount: '1000', title: 'Film 1', titleInEnglish: 'Film 1', productionDate: '2020', genre: 'Akcja', director: 'Reżyser 1' },
    { idFilmu: '10',videoId: 'oyRxxpD3yNw?si=nFA94t4BYLshlpey', ratingValue: '7.5', ratingCount: '2000', title: 'Film 2', titleInEnglish: 'Film 2', productionDate: '2021', genre: 'Komedia', director: 'Reżyser 2' },
    { idFilmu: '11',videoId: 'oyRxxpD3yNw?si=nFA94t4BYLshlpey', ratingValue: '9.0', ratingCount: '3000', title: 'Film 3', titleInEnglish: 'Film 3', productionDate: '2022', genre: 'Dramat', director: 'Reżyser 3' },
    { idFilmu: '12',videoId: 'oyRxxpD3yNw?si=nFA94t4BYLshlpey', ratingValue: '8.0', ratingCount: '4000', title: 'Film 4', titleInEnglish: 'Film 4', productionDate: '2023', genre: 'Thriller', director: 'Reżyser 4' },
    { idFilmu: '13',videoId: 'oyRxxpD3yNw?si=nFA94t4BYLshlpey', ratingValue: '8.5', ratingCount: '1000', title: 'Film 1', titleInEnglish: 'Film 1', productionDate: '2020', genre: 'Akcja', director: 'Reżyser 1' },
    { idFilmu: '14',videoId: 'oyRxxpD3yNw?si=nFA94t4BYLshlpey', ratingValue: '7.5', ratingCount: '2000', title: 'Film 2', titleInEnglish: 'Film 2', productionDate: '2021', genre: 'Komedia', director: 'Reżyser 2' },
    { idFilmu: '15',videoId: 'oyRxxpD3yNw?si=nFA94t4BYLshlpey', ratingValue: '9.0', ratingCount: '3000', title: 'Film 3', titleInEnglish: 'Film 3', productionDate: '2022', genre: 'Dramat', director: 'Reżyser 3' },
    { idFilmu: '16',videoId: 'oyRxxpD3yNw?si=nFA94t4BYLshlpey', ratingValue: '8.0', ratingCount: '4000', title: 'Film 4', titleInEnglish: 'Film 4', productionDate: '2023', genre: 'Thriller', director: 'Reżyser 4' }
    // dodaj więcej filmów według potrzeb
  ];

  return (
    <div className="App">
        <div className="header">
          <Logo />
          <SearchEngine />
          <LoginButton />
        </div>
      <div className="content" id="content">
        <div className="film-grid">
          {films.map((film, index) => (
            <Film
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