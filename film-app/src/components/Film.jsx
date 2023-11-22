import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Demo from './Demo'; 
import Rating from './Rating'; 
import Title from './Title'; 
import './../App.css';

const Film = ({ videoId, ratingValue, ratingCount, title, titleInEnglish, productionDate, genre, director }) => { 
  return (
    <Card className="mb-0" style={{backgroundColor: '#ffeadc'}}>
      <Card.Body className="p-0">
        <Container className="movie-trailer">
          <Row style={{ paddingTop: 5 }}>
            <Col xs={12} md={6}>
              <Demo videoId={videoId}  /> 
            </Col>
            <Col xs={12} md={6}>
              <div className="d-flex flex-column">
                <Title title={title} titleInEnglish={titleInEnglish} productionDate={productionDate}  /> 
                <Rating ratingValue={ratingValue} ratingCount={ratingCount}  /> 
                <p className="small">{director} Gatunek: {genre} </p> 
              </div>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
};

export default Film;