import React from 'react';
import Logo from './components/Logo';
import SearchEngine from './components/SearchEngine';
import LoginButton from './components/LoginButton';
import Footer from './components/Footer';
import Film from './components/Film'; // importuj komponent Film
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const films = [ // dodaj tablicę z danymi filmów
    { videoId: 'oyRxxpD3yNw?si=nFA94t4BYLshlpey', ratingValue: '8.5', ratingCount: '1000', title: 'Film 1', titleInEnglish: 'Film 1', productionDate: '2020', genre: 'Akcja', director: 'Reżyser 1' },
    { videoId: 'oyRxxpD3yNw?si=nFA94t4BYLshlpey', ratingValue: '7.5', ratingCount: '2000', title: 'Film 2', titleInEnglish: 'Film 2', productionDate: '2021', genre: 'Komedia', director: 'Reżyser 2' },
    { videoId: 'oyRxxpD3yNw?si=nFA94t4BYLshlpey', ratingValue: '9.0', ratingCount: '3000', title: 'Film 3', titleInEnglish: 'Film 3', productionDate: '2022', genre: 'Dramat', director: 'Reżyser 3' },
    { videoId: 'oyRxxpD3yNw?si=nFA94t4BYLshlpey', ratingValue: '8.0', ratingCount: '4000', title: 'Film 4', titleInEnglish: 'Film 4', productionDate: '2023', genre: 'Thriller', director: 'Reżyser 4' },
    { videoId: 'oyRxxpD3yNw?si=nFA94t4BYLshlpey', ratingValue: '8.5', ratingCount: '1000', title: 'Film 1', titleInEnglish: 'Film 1', productionDate: '2020', genre: 'Akcja', director: 'Reżyser 1' },
    { videoId: 'oyRxxpD3yNw?si=nFA94t4BYLshlpey', ratingValue: '7.5', ratingCount: '2000', title: 'Film 2', titleInEnglish: 'Film 2', productionDate: '2021', genre: 'Komedia', director: 'Reżyser 2' },
    { videoId: 'oyRxxpD3yNw?si=nFA94t4BYLshlpey', ratingValue: '9.0', ratingCount: '3000', title: 'Film 3', titleInEnglish: 'Film 3', productionDate: '2022', genre: 'Dramat', director: 'Reżyser 3' },
    { videoId: 'oyRxxpD3yNw?si=nFA94t4BYLshlpey', ratingValue: '8.0', ratingCount: '4000', title: 'Film 4', titleInEnglish: 'Film 4', productionDate: '2023', genre: 'Thriller', director: 'Reżyser 4' },
    { videoId: 'oyRxxpD3yNw?si=nFA94t4BYLshlpey', ratingValue: '8.5', ratingCount: '1000', title: 'Film 1', titleInEnglish: 'Film 1', productionDate: '2020', genre: 'Akcja', director: 'Reżyser 1' },
    { videoId: 'oyRxxpD3yNw?si=nFA94t4BYLshlpey', ratingValue: '7.5', ratingCount: '2000', title: 'Film 2', titleInEnglish: 'Film 2', productionDate: '2021', genre: 'Komedia', director: 'Reżyser 2' },
    { videoId: 'oyRxxpD3yNw?si=nFA94t4BYLshlpey', ratingValue: '9.0', ratingCount: '3000', title: 'Film 3', titleInEnglish: 'Film 3', productionDate: '2022', genre: 'Dramat', director: 'Reżyser 3' },
    { videoId: 'oyRxxpD3yNw?si=nFA94t4BYLshlpey', ratingValue: '8.0', ratingCount: '4000', title: 'Film 4', titleInEnglish: 'Film 4', productionDate: '2023', genre: 'Thriller', director: 'Reżyser 4' },
    { videoId: 'oyRxxpD3yNw?si=nFA94t4BYLshlpey', ratingValue: '8.5', ratingCount: '1000', title: 'Film 1', titleInEnglish: 'Film 1', productionDate: '2020', genre: 'Akcja', director: 'Reżyser 1' },
    { videoId: 'oyRxxpD3yNw?si=nFA94t4BYLshlpey', ratingValue: '7.5', ratingCount: '2000', title: 'Film 2', titleInEnglish: 'Film 2', productionDate: '2021', genre: 'Komedia', director: 'Reżyser 2' },
    { videoId: 'oyRxxpD3yNw?si=nFA94t4BYLshlpey', ratingValue: '9.0', ratingCount: '3000', title: 'Film 3', titleInEnglish: 'Film 3', productionDate: '2022', genre: 'Dramat', director: 'Reżyser 3' },
    { videoId: 'oyRxxpD3yNw?si=nFA94t4BYLshlpey', ratingValue: '8.0', ratingCount: '4000', title: 'Film 4', titleInEnglish: 'Film 4', productionDate: '2023', genre: 'Thriller', director: 'Reżyser 4' }
    // dodaj więcej filmów według potrzeb
  ];

  return (
    <div className="App">
      <div className="header">
        <Logo />
        <SearchEngine />
        <LoginButton />
      </div>
      <div className="content" id='content' >
        {films.map((film, index) => ( // wyświetl każdy film jako komponent Film
          <Film key={index} {...film} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;