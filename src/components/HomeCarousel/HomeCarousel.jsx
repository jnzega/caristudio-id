import React from 'react';
import { Carousel } from "react-bootstrap";
import Image1 from "../../assets/img/carousel/gambar-1.jpg";
import Image2 from "../../assets/img/carousel/gambar-2.jpg";
import Image3 from "../../assets/img/carousel/gambar-3.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import './HomeCarousel.css';


const HomeCarousel = () => {
  return (
    <>
      <div className="carousel">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Image1}
              alt="Gambar 1"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Image2}
              alt="Gambar 2"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Image3}
              alt="Gambar 3"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default HomeCarousel;