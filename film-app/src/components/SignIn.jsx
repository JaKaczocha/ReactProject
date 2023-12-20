import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import Logo from './Logo';
import SearchEngine from './SearchEngine';
import LoginButton from './LoginButton';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginChange = (e) => {
    setLogin(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform login logic here, such as sending data to a server or validating the credentials
    console.log('Login:', login, 'Password:', password);
  };

  return (
    <div>
      <div className="header">
        <Logo />
        <SearchEngine />
        <LoginButton />
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
  
          <Button variant="primary" type="submit" style={{ marginBottom: '1rem',backgroundColor: '#a53b5b' }}>
            Zaloguj
          </Button>
            <div style={{marginBottom: '130px'}}>
                <p>Nie masz konta? <Link to="/signup" style={{color: '#a53b5b'}}>Zarejestruj się</Link></p>
            </div>
        </Form>
      </Container>
  
      <Footer />
    </div>
  );
};

export default SignIn;