import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import Logo from './Logo';
import SearchEngine from './SearchEngine';
import LoginButton from './LoginButton';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const SignIn = () => {
  
  const navigate = useNavigate(); // Use useNavigate

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState('');

  const handleLoginChange = (e) => {
    setLogin(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('https://at.usermd.net/api/user/auth', {
        login,
        password,
      });
  
      setLoggedIn(true);
      setLoginError('');
  
      // Log a message to the console after successful login
      console.log('Login successful!');
  
      // Redirect to Home component with isLoggedIn value
      navigate('/', { state: { isLoggedIn: true, login } });
    } catch (error) {
      setLoggedIn(false);
      setLoginError('Błędny login lub hasło');
      console.error('Login failed:', error);
    }
  };


  return (
    <div>
      <div className="header">
        <Logo />
        <SearchEngine />
        {isLoggedIn ? (
          <Button
            variant="primary"
            onClick={handleLogout}
            style={{ backgroundColor: '#a53b5b', marginRight: '1rem' }}
          >
            Wyloguj
          </Button>
        ) : (
          <LoginButton />
        )}
      </div>
      <Container
        style={{
          textAlign: 'center',
          marginTop: '80px',
          marginBottom: '2rem',
        }}
        className="mx-auto"
      >
        <h2 style={{ marginBottom: '4rem' }}>Sign in</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formLogin" style={{ marginBottom: '2rem' }}>
            <Form.Label>Login:</Form.Label>
            <Form.Control
              type="text"
              value={login}
              onChange={handleLoginChange}
              style={{ width: '400px', margin: 'auto' }}
              required
            />
          </Form.Group>

          <Form.Group controlId="formPassword" style={{ marginBottom: '2rem' }}>
            <Form.Label>Hasło:</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={handlePasswordChange}
              style={{ width: '400px', margin: 'auto' }}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" style={{ marginBottom: '1rem', backgroundColor: '#a53b5b' }}>
            Zaloguj
          </Button>
          <div style={{ marginBottom: '130px' }}>
            {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
            {isLoggedIn ? (
              <p>Jesteś zalogowany.</p>
            ) : (
              <p>
                Nie masz konta? <Link to="/signup" style={{ color: '#a53b5b' }}>Zarejestruj się</Link>
              </p>
            )}
          </div>
        </Form>
      </Container>
      <Footer />
    </div>
  );
};

export default SignIn;
