import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import Logo from './Logo';
import SearchEngine from './SearchEngine';
import LoginButton from './LoginButton';
import Footer from './Footer';

const SignUp = () => {
  const [login, setLogin] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registrationStatus, setRegistrationStatus] = useState(null);

  const handleLoginChange = (e) => {
    setLogin(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const requestData = {
        name: name,
        email: email,
        password: password,
      };

      const response = await axios.post('https://at.usermd.net/api/user/create', requestData);

      console.log('Registration successful:', response.data);

      setRegistrationStatus('success');

    } catch (error) {
      console.error('Registration failed:', error);

      setRegistrationStatus('error');
    }
  };

  return (
    <div>
      <div className="header">
        <Logo />
        
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
        <h2 style={{ marginBottom: '4rem' }}>Sign up</h2>

        {registrationStatus === 'success' && (
          <Alert variant="success">Registration successful!</Alert>
        )}
        {registrationStatus === 'error' && (
          <Alert variant="danger">Registration failed. Value in use. Please try again.</Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formLogin" style={{ marginBottom: '1rem' }}>
            <Form.Label>Login:</Form.Label>
            <Form.Control
              type="text"
              value={login}
              onChange={handleLoginChange}
              style={{ width: '400px', margin: 'auto' }}
              required
            />
          </Form.Group>

          <Form.Group controlId="formName" style={{ marginBottom: '1rem' }}>
            <Form.Label>Nazwa:</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={handleNameChange}
              style={{ width: '400px', margin: 'auto' }}
              required
            />
          </Form.Group>

          <Form.Group controlId="formEmail" style={{ marginBottom: '1rem' }}>
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={handleEmailChange}
              style={{ width: '400px', margin: 'auto' }}
              required
            />
          </Form.Group>

          <Form.Group controlId="formPassword" style={{ marginBottom: '1rem' }}>
            <Form.Label>Hasło:</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={handlePasswordChange}
              style={{ width: '400px', margin: 'auto' }}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" style={{ marginBottom: '5px', backgroundColor: '#a53b5b' }}>
            Zarejestruj się
          </Button>
        </Form>
      </Container>

      <Footer />
    </div>
  );
};

export default SignUp;
