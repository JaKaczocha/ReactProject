import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Rating from './Rating'; 
import Title from './Title'; 
import './../App.css';

const Film = ({ id, image, rate, title, titleInEnglish, productionDate, genre, director, className, login, isLoggedIn, token }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleFilmDetailsNavigation = () => {
    // Use navigate to move to FilmDetails and pass relevant state
    navigate(`/details/${id}`, { state: { login, isLoggedIn, token , id} });
  };

  return (
    <div onClick={handleFilmDetailsNavigation} style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
      <Card className={`mb-3 ${className || ''}`} style={{ backgroundColor: '#ffeadc' }}>
        <Card.Body className="p-0">
          <Container className="movie-trailer">
            <Row style={{ paddingTop: 5 }}>
              <Col xs={12} md={6}>
                <img src={image} alt={title} style={{ width: '100%', height: 'auto' }} />
              </Col>
              <Col xs={12} md={6}>
                <div className="d-flex flex-column">
                  <Title title={title} titleInEnglish={titleInEnglish} productionDate={productionDate} />
                  {/* Pass the 'rate' property instead of 'ratingValue' and 'ratingCount' */}
                  <Rating rate={rate} />
                  <p className="small">{director} Gatunek: {genre} </p>
                </div>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Film;