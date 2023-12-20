import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MovieTrailer from './Demo';
import Rating from './Rating'; 
import Title from './Title'; 
import './../App.css';

const Film = ({ idFilmu, videoId, ratingValue, ratingCount, title, titleInEnglish, productionDate, genre, director, className, more}) => {
  
  return (
    <Link to={`/details/${idFilmu}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Card className={`mb-3 ${className || ''}`} style={{ backgroundColor: '#ffeadc' }}>
        <Card.Body className="p-0">
          <Container className="movie-trailer">
            <Row style={{ paddingTop: 5 }}>
              <Col xs={12} md={6}>
                <MovieTrailer videoId={videoId} defaultHeight={200} defaultWidth={170}/>
              </Col>
              <Col xs={12} md={6}>
                <div className="d-flex flex-column">
                  <Title title={title} titleInEnglish={titleInEnglish} productionDate={productionDate} />
                  <Rating ratingValue={ratingValue} ratingCount={ratingCount} />
                  <p className="small">{director} Gatunek: {genre} </p>
                </div>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default Film;