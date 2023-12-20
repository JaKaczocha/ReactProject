import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import Footer from './Footer';
import Logo from './Logo';
import SearchEngine from './SearchEngine';
import LoginButton from './LoginButton';

const AddFilm = () => {
  const [title, setTitle] = useState('');
  const [titleInEnglish, setTitleInEnglish] = useState('');
  const [productionDate, setProductionDate] = useState('');
  const [genre, setGenre] = useState('');
  const [director, setDirector] = useState('');
  const [videoId, setVideoId] = useState('');
  const [info, setInfo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to add a film can be added here
    console.log('Film data:', {
      title,
      titleInEnglish,
      productionDate,
      genre,
      director,
      videoId,
      info,
    });

    // Reset form fields
    setTitle('');
    setTitleInEnglish('');
    setProductionDate('');
    setGenre('');
    setDirector('');
    setVideoId('');
    setInfo('');
  };

  return (
    <div>
        <div className="header">
                 <Logo />
                <SearchEngine />
                <LoginButton />
        </div>
        <Container className="text-center mt-5">
        <h2>Dodaj nowy film</h2>
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

                <Form.Group controlId="formTitleInEnglish">
                <Form.Label>Tytuł (w języku angielskim):</Form.Label>
                <Form.Control
                    type="text"
                    value={titleInEnglish}
                    onChange={(e) => setTitleInEnglish(e.target.value)}
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

                <Form.Group controlId="formDirector">
                <Form.Label>Reżyser:</Form.Label>
                <Form.Control
                    type="text"
                    value={director}
                    onChange={(e) => setDirector(e.target.value)}
                    style={{ width: '350px', margin: 'auto' }}
                    required
                />
                </Form.Group>

                <Form.Group controlId="formVideoId">
                <Form.Label>Video ID (z YouTube):</Form.Label>
                <Form.Control
                    type="text"
                    value={videoId}
                    onChange={(e) => setVideoId(e.target.value)}
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
            <Button variant="primary" type="submit" className="mt-3">
            Dodaj film
            </Button>
        </Form>
        </Container>
        <Footer/>
    </div>
  );
};

export default AddFilm;