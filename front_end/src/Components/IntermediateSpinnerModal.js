import './IntermediateSpinnerModal.css';
import React from 'react';
import {Card, Button, Row, Col, Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import topRated from './Dummy(topRatedFilms).json';
import { FaInfoCircle } from 'react-icons/fa';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Wheel from './Spinner';
import SpinnerModal from './SpinnerModal';


function IntermediateSpinnerModal(props) {
  const [modalShow, setModalShow] = React.useState(0);
  const places = ['Pizzas', 'Sandwiches', 'Salads', 'Soup', 'Japanese food', 'Pastas'];
  console.log("YES here")
  console.log(props)
 
    return (
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modalSize"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter  modalColor">
            <h5 className="mt-2 ml-2">Quick Movie Info</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4 className="sideDist">JGJHG</h4>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7n2hpzE1hNzc4V7nHj_GT2CWSqtjCld0PhQ&usqp=CAU" className="float-left sideDist dim"/>
          <p className="container-75 modalText">
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
          
          <h6 className="container-75 modalText mt-5"><b>Year: </b>HHHHHH</h6>
          <Button variant="primary" onClick={setModalShow(0)}>
          <SpinnerModal content={<Wheel items={places} />}
                show={modalShow}
                onHide={() => setModalShow(0)}
        /> 
          </Button>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default IntermediateSpinnerModal;


