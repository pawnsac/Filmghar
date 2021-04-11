import './VerticalModal.css';
import React from 'react';
import {Card, Button, Row, Col, Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import topRated from './Dummy(topRatedFilms).json';
import { FaInfoCircle } from 'react-icons/fa';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


function VerticalModal(props) {
  console.log(props);
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modalSize"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter  modalColor" style={{color: 'black'}} >
            <h5 className="mt-2 ml-2" style={{color: 'black'}} >Quick Movie Info</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4 className="sideDist" style={{color: 'black'}} >{props.content.title}</h4>

          <img src={props.content.images[0]} className="float-left ml-0 px-3"/>
          <p className="container-75 text-left px-5 w-0" style={{width: '2rem', color: 'black'}}>

          {props.content.plot}
          </p>
          <div className="container-75 modalText pt-5 mt-2" style={{color: 'black'}} ><b>Genre:</b>
         <Row className="">{props.content.genres.map((key,i) => (
                
                <Col className="pt-1 offset-lg-2 mr-2 col-lg-2 modalText2 padding-0 "><button className="">{key}</button></Col>
                
          ))}
          </Row>
          </div>
          <h6 className="container-75 modalText mt-5" style={{color: 'black'}} ><b>Year: </b>{props.content.year}</h6>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default VerticalModal;


// gti add *  git commit -m "yo message"
// git push origin master