import './TopRatedFilms.css';
import React from 'react';

import {Card, Button, Row, Col, Modal} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Link,Redirect} from 'react-router-dom';
import { FaInfoCircle } from 'react-icons/fa';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import VerticalModal from './VerticalModal';
import StarIcon from '@material-ui/icons/Star';


// function MyVerticallyCenteredModal(props) {
//     const {id} = useParams
//     console.log(id);
//     return (
//         <Modal
//         {...props}
//         size="lg"
//         aria-labelledby="contained-modal-title-vcenter"
//         centered
//         className="modalSize"
//       >
//         <Modal.Header closeButton>
//           <Modal.Title id="contained-modal-title-vcenter modalColor">
//             Modal heading
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <h4 className="sideDist">{props.content.title}</h4>
//           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7n2hpzE1hNzc4V7nHj_GT2CWSqtjCld0PhQ&usqp=CAU" className="float-left sideDist dim"/>
//           <p className="container-75 modalText">
//             Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
//             dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
//             consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
//             dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
//             consectetur ac, vestibulum at eros.
//           </p>
//           <div className="container-75 modalText pt-5"><b>Genre:</b>
//          <Row className="">{props.content.genres.map((key,i) => (
                
//                 <Col className="pt-1 offset-lg-2 mr-2 col-lg-2 modalText2 padding-0"><button className="">{key}</button></Col>
                
//           ))}
//           </Row>
//           </div>
//           <h6 className="container-75 modalText mt-3"><b>Year: </b>{props.content.year}</h6>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button onClick={props.onHide}>Close</Button>
//         </Modal.Footer>
//       </Modal>
//     );
//   }


function TopRatedFilms() {
    const [modalShow, setModalShow] = React.useState(0);
      const [movies, setmovies] = React.useState([]);

const fetch1 =  ()=>{

  fetch('api/toprated')
  .then (response=>  response.json())
  .then (data =>{
    
      var x = data.length
      var changes=data
      var y=""
      var itr=0
      var actors=[]
      while (x!=0){
        x--
        y=changes[x].genres
        y=y.split(",")
        changes[x].genres=y
        y=changes[x].actors
        y=y.split(",")
        while(true){
        if(y[itr]==undefined){
          break;
        } 
        actors.push(parseInt(y[itr]))
        itr++
        }
        changes[x].actors=actors
        actors=[]
        y=changes[x].images
        y=y.split(",")
        changes[x].images=y
        

      }
      
      setmovies(changes)
      }
      )
}
fetch1()
    const renderCard = (card, index) => {
    return (

        <Card style={{ width: '16rem', position: "relative"}} className="box2 rounded">
        <Link
            to={{
            pathname: `/movie/${card.id}`,
            state: { referrer: card }
            }}
            >
  <Card.Img variant="top"  style={{height: '18rem' }} src={card.posterUrl} />
 
 </Link>
 < Card.Body className="color "  style={{height: '12rem' , position: "relative"}}>
  <Card.Text><StarIcon  style={{color: '#D4AF37' }}/>  {card.rating} <FaInfoCircle color="white"  style={{float: "right" }}
  onClick={() => setModalShow(card.id)}/>
  </Card.Text>

    
     <Row>
         <Col>
              <Card.Title className="text-color" style = {{position: "absolute"}}>{card.title}</Card.Title>
         </Col>
         
             
    
     </Row>

     <Button  className = "addedbutton p-2 ml-2" >ADD TO WATCHLIST</Button>
     <VerticalModal content={card}
       show={modalShow===card.id}
       onHide={() => setModalShow(0)}
       />
 </Card.Body>
{ /* <AddCircleIcon fontSize= "large" style={{position:"absolute" ,marginLeft: "190px",color: "#D4AF37"}}  />*/}
</Card>



    )}

    return (
        <div className="my-5">
        <div className = "section-heading">
    <h3 >Top Rated Films</h3>
    <p >Five Top Rated films by the users of Film Ghar </p>
    </div>

    <div className="grid2 conatainer-fluid justify-content-center mx-5">{movies.map(renderCard)}</div>
        </div>
    )};
export default TopRatedFilms;