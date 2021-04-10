
import './viewWatchList.css';

import React from 'react';

import {Carousel, Card, Button,Row,Col} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Link,Redirect} from 'react-router-dom';
import watchlists from './Watchlists';
import films from './Dummy(topRatedFilms).json';

import StarIcon from '@material-ui/icons/Star';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { FaInfoCircle } from 'react-icons/fa';
//import Rating from '@material-ui/lab/Rating';

function ViewWatchlist() {

  const [modalShow, setModalShow] = React.useState(0);
    const renderCard = (card, index) => {
      console.log(films.filter(wl => wl.id === card))
      const film = films.filter(wl => wl.id === card)[0]
    return (

        
           
            <Card style={{ width: '16rem', position: "relative"}} className="box2">
                                 <Link
          to={{
            pathname: `/movie/${film.id}`,
            state: { referrer: film }
          }}
        >
                     <Card.Img variant="top"  style={{height: '18rem' }} src={film.posterUrl} />
                    
                    </Link>
                    < Card.Body className="color"  style={{height: '12rem' , position: "relative"}}>
                     <Card.Text><StarIcon  style={{color: '#D4AF37' }}/>  {film.rating} <FaInfoCircle color="white" style={{float: "right" }}
                     onClick={() => setModalShow(film.id)}/>
                     </Card.Text>
  
                       
                        <Row>
                            <Col>
                                 <Card.Title className="text-color" style = {{position: "absolute"}}>{film.title}</Card.Title>
                            </Col>
                            
                                
                       
                        </Row>
                   
                       

                       {/* <Button className="addedbutton2 mr-3 mb-3"><div className="p-1">REMOVE FROM WATCHLIST</div></Button> */}

                    </Card.Body>
                    { /* <AddCircleIcon fontSize= "large" style={{position:"absolute" ,marginLeft: "190px",color: "#D4AF37"}} />*/}
          
          
  </Card>           
           
    )}

    return (
        <div >
    <h3 className="heading text-color">Watch List</h3>
    <p className="heading text-color"> Films in your Watchlist </p>
     <div className="grid2 conatainer-fluid justify-content-center mx-5">{watchlists.filter(wl => wl.user_id === 1).map(user => (user.movie_id.map(renderCard))) }</div>
   
   

</div>
    )};
export default  ViewWatchlist;

