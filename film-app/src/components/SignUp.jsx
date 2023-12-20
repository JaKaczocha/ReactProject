import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import Logo from './Logo';
import SearchEngine from './SearchEngine';
import LoginButton from './LoginButton';
import Footer from './Footer';

const SignUp = () => {
  const [login, setLogin] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform registration logic here, such as sending data to a server or validating the registration details
    console.log('Login:', login, 'Name:', name, 'Email:', email, 'Password:', password);
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
        <h2 style={{ marginBottom: '4rem' }}>Sign up</h2>
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
  
          <Button variant="primary" type="submit" style={{ marginBottom: '5px' ,backgroundColor: '#a53b5b'}}>
            Zarejestruj się
          </Button>
        </Form>
      </Container>
  
      <Footer />
    </div>
  );
};

export default SignUp;