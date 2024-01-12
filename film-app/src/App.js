import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Logo from './components/Logo';
import SearchEngine from './components/SearchEngine';
import LoginButton from './components/LoginButton';
import Footer from './components/Footer';
import Film from './components/Film';
import Home from './components/Home'; // Nowy komponent dla strony głównej
import FilmDetails from './components/FilmDetails'; // Nowy komponent dla szczegółów filmu
import AddFilm from './components/AddFilm'; // Nowy komponent dla dodawania nowego filmu
import SignIn from './components/SignIn'; // Nowy komponent dla logowania
import SignUp from './components/SignUp'; // Nowy komponent dla rejestracji
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  

  return (
    <Router>
      <div className="App">
        
        <div className="content" id='content'>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/details/:idFilmu" element={<FilmDetails />} />
            <Route path="/add" element={<AddFilm />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
        
      </div>
    </Router>
  );
}

export default App;