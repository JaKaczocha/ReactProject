import React from 'react';
import { Container } from 'react-bootstrap';

const MovieTrailer = ({ videoId }) => {
  const videoSrc = `https://www.youtube.com/embed/${videoId}`;

  return (
    <Container className="movie-trailer" >
      <iframe 
        
        width={170}
        height={200}
        src={videoSrc} 
        title="YouTube video player" 
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen="allowfullscreen"
        mozallowfullscreen="mozallowfullscreen" 
        msallowfullscreen="msallowfullscreen" 
        oallowfullscreen="oallowfullscreen" 
        webkitallowfullscreen="webkitallowfullscreen"
      ></iframe>
    </Container>
  );
};

export default MovieTrailer;