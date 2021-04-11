/*import './TopRatedFilms.css';*/
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
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

//import Rating from '@material-ui/lab/Rating';

function ViewWatchlist() {
      const settings = {
    dots: true,
    infinite: false,
    speed: 500,

    slidesToShow: 5,
    slidesToScroll: 1
  };

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
                   
                       
                       <Button className = "addedbutton"> ADDED TO WATCHLIST </Button>
                    </Card.Body>
                    { /* <AddCircleIcon fontSize= "large" style={{position:"absolute" ,marginLeft: "190px",color: "#D4AF37"}} />*/}
          
          
  </Card>           
           
    )}

    return (
        <div >
        <div className = "section-heading">
    <h3 >Watch List</h3>
    <p > Films in your Watchlist </p>
</div>

    <Slider {...settings} className="slider-cont mx-5" >
    { watchlists.filter(wl => wl.user_id === 1).map(user => ( user.movie_id.map(renderCard))) }
    </Slider>
   

</div>
    )};
export default  ViewWatchlist;

