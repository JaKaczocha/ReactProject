import React, { useState, useEffect  } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import Footer from './Footer';
import Logo from './Logo';
import SearchEngine from './SearchEngine';
import LogoutButton from './LogoutButton';
import { useLocation, useNavigate } from 'react-router-dom';

const AddFilm = () => {

  const [title, setTitle] = useState('');
  const [productionDate, setProductionDate] = useState('');
  const [genre, setGenre] = useState('');
  const [picture, setPicture] = useState('');
  const [info, setInfo] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [login, setLogin] = useState('');
  const [token, setToken] = useState('');
  const location = useLocation();
  const navigate = useNavigate(); // Use useNavigate from react-router-dom
  
  
  useEffect(() => {
    if (location.state && location.state.isLoggedIn !== undefined) {
      setIsLoggedIn(location.state.isLoggedIn);
      setLogin(location.state.login || 'k');
      const extractedToken = location.state.token || '';
      setToken(extractedToken);
    }

  }, [location.state]);
 

  const handleSubmit = async (e) => {
    if (isLoggedIn) {
      e.preventDefault();

      const filmData = {
        title,
        image: picture,
        content: info,
        productionYear: productionDate,
        genre,
        rate: 0,
      };

      try {
        const response = await fetch('https://at.usermd.net/api/movies', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(filmData),
        });

        if (response.ok) {
          console.log('Film added successfully!');
          // After successfully adding the film, navigate back to Home with login and isLoggedIn state
          navigate('/', { state: { login, isLoggedIn,token } });
        } else {
          console.error('Failed to add film:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Error:', error.message);
      }

      // Reset form fields
      setTitle('');
      setProductionDate('');
      setGenre('');
      setPicture('');
      setInfo('');
    }
  };

  return (
    <div>
      <div className="header">
        
        <Logo login={login} isLoggedIn={isLoggedIn} token={token}/>
        
        <LogoutButton />
        <p style={{ margin: '0 0 0 40px' }}>Witaj, {login}!</p>
      </div>
      <Container className="text-center mt-5">
        <div style={{ marginTop: 10 }}>
          <h2>Dodaj nowy film</h2>
        </div>

        <Form onSubmit={handleSubmit}>
          <Row>
            {/* First Column */}
            <Col xs={12} md={6}>
              <Form.Group controlId="formTitle">
                <Form.Label>Tytuł:</Form.Label>
                <Form.Control
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  style={{ width: '350px', margin: 'auto' }}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formProductionDate">
                <Form.Label>Data produkcji:</Form.Label>
                <Form.Control
                  type="text"
                  value={productionDate}
                  onChange={(e) => setProductionDate(e.target.value)}
                  style={{ width: '350px', margin: 'auto' }}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formGenre">
                <Form.Label>Gatunek:</Form.Label>
                <Form.Control
                  type="text"
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                  style={{ width: '350px', margin: 'auto' }}
                  required
                />
              </Form.Group>

              <Form.Group controlId="picture">
                <Form.Label>Picture:</Form.Label>
                <Form.Control
                  type="text"
                  value={picture}
                  onChange={(e) => setPicture(e.target.value)}
                  style={{ width: '350px', margin: 'auto' }}
                  required
                />
              </Form.Group>
            </Col>

            {/* Second Column */}
            <Col xs={12} md={6}>
              <Form.Group controlId="formInfo">
                <Form.Label>Więcej informacji:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  value={info}
                  onChange={(e) => setInfo(e.target.value)}
                  style={{ height: '380px', width: '350px', margin: 'auto' }}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Submit Button */}
          <Button variant="primary" type="submit" className="mt-3" style={{ marginBottom: 20 }}>
            Dodaj film
          </Button>
        </Form>
      </Container>
      <Footer />
    </div>
  );
};

export default AddFilm;
