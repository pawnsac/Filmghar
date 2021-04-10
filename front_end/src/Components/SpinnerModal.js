import React, { Component, useState, useEffect} from 'react';
import {Carousel, Button, Card, CardColumns, Row, Col, Container, Modal} from 'react-bootstrap';
import {Redirect, Switch, Route, Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SpinnerModal.css'



function SpinnerModal(props) {
    // console.log("HEYYY IM HERE")
    // return (
    //     <div>
    //     props.content
    // </div>
    // )


    return (
        <Modal 
        {...props}
        size="lg"
        aria-labelledby="example-custom-modal-styling-title"
        centered
        className="special_modal"
      >
          <div className="" >
          <h1 className="text-center">Spin the wheel to see which Top Rated movie you should watch next!</h1>
          {props.content}
          </div>
        {/* <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter  modalColor">
            <h5 className="mt-2 ml-2">Quick Movie Info</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4 className="sideDist">{props.content.title}</h4>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7n2hpzE1hNzc4V7nHj_GT2CWSqtjCld0PhQ&usqp=CAU" className="float-left sideDist dim"/>
          <p className="container-75 modalText">
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
          <div className="container-75 modalText pt-5 mt-2"><b>Genre:</b>
         <Row className="">{props.content.genres.map((key,i) => (
                
                <Col className="pt-1 offset-lg-2 mr-2 col-lg-2 modalText2 padding-0 "><button className="">{key}</button></Col>
                
          ))}
          </Row>
          </div>
          <h6 className="container-75 modalText mt-5"><b>Year: </b>{props.content.year}</h6>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
      </Modal>
    );



}

export default SpinnerModal;

