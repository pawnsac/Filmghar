import './allFilms.css';
import React, { Component, useState } from 'react';
import {Card, Row, Col, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import movieData from './dummy.json';
import VerticalModal from './VerticalModal';
import StarIcon from '@material-ui/icons/Star';
import {Link,Redirect} from 'react-router-dom';
import { FaInfoCircle } from 'react-icons/fa';



function SearchView({keyword,searchResults}) {
    // const [results, setResults] = React.useState(``)
    let results = "Showing results for " + keyword;
    const [modalShow, setModalShow] = React.useState(0);
    // if (keyword !== searchResults)
    // {
    //     return ( <div>No Results found</div>)
    // }
    if (keyword == '')
    {
        return (
            ''
        // <App/>
        // <div>
        // <div>No Results found</div>
        // </div>
        )
       
    }
    // const resultResponse = searchResults.map((obj, i) => {
    //     return <div>{obj.title}</div>
    // })
    // return (

    //     <div>
    //     <h1>{results}</h1>
    //     {resultResponse}
    //     </div>

    // )
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
     < Card.Body className="color"  style={{height: '12rem' , position: "relative"}}>
      <Card.Text><StarIcon  style={{color: '#D4AF37' }}/>  {card.rating} 
      </Card.Text>
    
        
         <Row>
             <Col>
                  <Card.Title className="text-color" style = {{position: "absolute"}}>{card.title}</Card.Title>
             </Col>
             
                 
        
         </Row>
    
         <Button  className = "addedbutton" >ADD TO WATCHLIST</Button>
        
     </Card.Body>
    { /* <AddCircleIcon fontSize= "large" style={{position:"absolute" ,marginLeft: "190px",color: "#D4AF37"}}  />*/}
    </Card>
               
        )}


    return (
        <div>
    {/* <h3 className="txtAllFilms text-color">{results}</h3> */}
    <div className="grid container-fluid">{searchResults.length === 0 ? (<h3 className=" p-4 text-color">No results found</h3>) : searchResults.map(renderCard)}</div>
        </div>
    )

};
export default SearchView;