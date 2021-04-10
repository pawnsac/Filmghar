import React, { Component, useState} from 'react';
import {Carousel, Button, Card, CardColumns, Row, Col, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousel.css';
import img1 from '../img1.jpg';
import img2 from '../img2.jpg';
import img3 from '../img3.jpg';


function CarouselView() {
    return (
    <div className="container h-75 w-75">
            <Carousel >
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img1}
                  alt="First slide"
                />
                <Carousel.Caption className="text-md-left" >
                <h3>Second slide label</h3>
                  <h6>Genre</h6>
                  <p>Description</p>
                  <button type="button" class="btn btn-outline-primary BTN2 lab">Watch Trailer</button>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img2}
                  alt="Second slide"
                />

                <Carousel.Caption className="text-md-left">
                  <h3>Second slide label</h3>
                  <h6>Genre</h6>
                  <p>Description</p>
                  <button type="button" class="btn btn-outline-primary BTN2 lab">Watch Trailer</button>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={img3}
                  alt="Third slide"
                />

                <Carousel.Caption className="text-md-left">
                <h3>Second slide label</h3>
                  <h6>Genre</h6>
                  <p>Description</p>
                  <button type="button" class="btn btn-outline-primary BTN2 lab" onClick={event =>  window.location.href='https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjh8sbVjcHvAhXSfMAKHcmpBHAQPAgI'}>Watch Trailer</button>
              </Carousel.Caption>
              </Carousel.Item>
        </Carousel>
    </div>
    )};

export default CarouselView;
