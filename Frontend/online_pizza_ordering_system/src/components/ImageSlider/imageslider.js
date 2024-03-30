import React from "react";
import { Carousel } from "react-bootstrap";
import image4 from './carosal1.jpg';
import image6 from "./carosal2.jpg";
import image7 from "./carosal3.jpg";
export default function Imageslider() {
    const carouselItemStyle = {
        height: "600px", // Adjust the height as needed

    };
    return (
        <Carousel style={{width:'100%'}}>
      <Carousel.Item style={carouselItemStyle}>
        <img
          className="d-block w-100"
          src={image4}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Welcome to PiZZaria</h3>
         
        </Carousel.Caption>
      </Carousel.Item >
      <Carousel.Item style={carouselItemStyle}>
      <img
          className="d-block w-100"
          src={image6}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Welcome to PiZZaria</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={carouselItemStyle}>
      <img
          className="d-block w-100"
          src={image7}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Welcome to PiZZaria</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
}
