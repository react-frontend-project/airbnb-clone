import React from 'react';
import { Carousel } from 'react-bootstrap';
import './PostCarousel.css';
import 'bootstrap/dist/css/bootstrap.min.css';
const PostCarousel = ({ images, captions }) => {
  return (
    <Carousel interval={null} nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />} prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />}>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img
            className="post-image"
            src={image.src}
            alt={`Slide ${index + 1}`}
          />
          {/* <Carousel.Caption>
            <h3>{captions[index].title}</h3>
            <p>{captions[index].text}</p>
          </Carousel.Caption> */}
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default PostCarousel;
