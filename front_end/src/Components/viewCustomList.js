import './TopRatedFilms.css';
import React from 'react';
import {Carousel, Card, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link,Redirect} from 'react-router-dom';
import customlists from './Customlists';

import VerticalModal from './VerticalModal'


function ViewCustomlist() {
    const renderCarousel = (card, index) => {
    return (
                <Link
          to={{
            pathname: `/customlist/${card.id}`,
            state: { referrer: card }
          }} className = "customlist-href"
        >
           
          
 
    <img
      className="d-block h-75 w-75"
      src="http://img.dunyanews.tv/news/2017/May/05-10-17/news_big_images/387724_71144245.jpg"
      //alt="First slide"
    />
    <Carousel.Caption>
      <h3>{card.name}</h3>
    </Carousel.Caption>

  

            </Link>
           
    )}

    return (

        <div >

    <h3 className="heading text-color">Custom List</h3>
    <p className="heading text-color">Custom lists made by the users of Film Ghar </p>
    <Carousel indicators = "false" className="customlist-container">
    {customlists.map((card,index)=>(
        <Carousel.Item  indicators = "false" className="h-50 w-100 " >

                <Link
          to={{
            pathname: `/customlist/${card.id}`,
            state: { referrer: card }
          }} className = "customlist-href"
        className = "justify-content-center">
           
 <div className = "custom-images-cont">
    <img
     
      src="http://img.dunyanews.tv/news/2017/May/05-10-17/news_big_images/387724_71144245.jpg"
      //alt="First slide"
    />
     <img      
      src="http://img.dunyanews.tv/news/2017/May/05-10-17/news_big_images/387724_71144245.jpg"
      //alt="First slide"
    />
         <img      
      src="http://img.dunyanews.tv/news/2017/May/05-10-17/news_big_images/387724_71144245.jpg"
      //alt="First slide"
    />

    </div>



    <Carousel.Caption className = "customlist-text">
      <h3>{card.name}</h3>
    </Carousel.Caption>

  

            </Link>


            </Carousel.Item>



        ))}
    </Carousel>
   

</div>
    )};
export default  ViewCustomlist;

