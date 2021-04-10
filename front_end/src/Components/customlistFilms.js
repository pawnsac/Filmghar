import './allFilms.css';
import './TopRatedFilms.css';
import React, { Component} from 'react';
import {Card, Row, Col, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import movieData from './Dummy(topRatedFilms).json';
import {Link,Redirect} from 'react-router-dom';
import VerticalModal from './VerticalModal.js';
import { FaInfoCircle } from 'react-icons/fa';
import StarIcon from '@material-ui/icons/Star';
import AddCircleIcon from '@material-ui/icons/AddCircle';


function CustomlistFilms(props) {
    const [modalShow, setModalShow] = React.useState(0);
    const customlistrecvd = props.location.state.referrer
     const addToWatchlist = (film) => {
        /*get watchlist, search for our watchlist, post request to our watchlist*/
       /*const wltoadd = watchlists.filter(wl => wl.user_id === user)*/
       /*   const [values, setValues] = React.useState({
    id: '',
    movie_id: '',
    review: ''
  });
*/

/*    const params = {
    user_id: values.id,
    movie_id: values.movie_id,
    review: values.review
  }
  //const user = localStorage.getItem('id')
 // setValues.id(user)
  setValues(values.movie_id,props.location.state.referrer.id)*/
  //const name = localStorage.getItem('id')

/* const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };*/

/*  const handleReview = event => {
    event.preventDefault();
    axios.post(baseURL, params, {
      headers: {
        'content-type': 'application/json',
      },
    }
    )
    .then(response => {
      console.log(response.data)
    })
  }*/
     }
    const renderCard = (card, index) => {
    return (
      <Card style={{ width: '16rem', position: "relative"}} className="box2">
                           <Link to={{
            pathname: `/movie/${card.id}`,
            state: { referrer: card }
          }}
        >
                     <Card.Img variant="top"  style={{height: '18rem' }} src={card.posterUrl} />
                    
                    </Link>
                    < Card.Body className="color"  style={{height: '12rem' , position: "relative"}}>
                     <Card.Text ><StarIcon  style={{color: '#D4AF37' }}/>  {card.rating} <FaInfoCircle color="white"  style={{float: "right" }}
                     onClick={() => setModalShow(card.id)}/>
                     </Card.Text>

                       
                        <Row>
                            <Col>
                                 <Card.Title className="text-color" style = {{position: "absolute"}}>{card.title}</Card.Title>
                            </Col>
                            
                                
                       
                        </Row>

                        <Button  className = "addedbutton" onClick = {addToWatchlist(card.id)}>ADD TO WATCHLIST</Button>
                        <VerticalModal content={card}
                          show={modalShow===card.id}
                          onHide={() => setModalShow(0)}
                          />
                    </Card.Body>
                    {/*<AddCircleIcon fontSize= "large" style={{position:"absolute" ,marginLeft: "190px",color: "#D4AF37"}}  />*/}
            </Card>

    )}

    return (
        <div>

    <h1 className="txtAllFilms text-color">{customlistrecvd.name}</h1>

    <div className="grid container-fluid">{ movieData.filter(movie => customlistrecvd.movie_id.includes(movie.id)).map(renderCard)}</div>
        </div>
    )};

export default CustomlistFilms;

