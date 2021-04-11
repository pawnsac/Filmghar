import './AppTemp.css';
import React, { Component, useState, useEffect} from 'react';
import {Carousel, Button, Card, CardColumns, Row, Col, Container} from 'react-bootstrap';
import {Redirect, Switch, Route, Router, useParams} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import AllFilms from './allFilms';
import profile from './profile';

import TopRatedFilms from './TopRatedFilms';
import SearchView from './Search';
import Wheel from './Spinner';
import SignUp from './SignUp';
import nametag from './nametags';
import login from'./login';

import SpinnerModal from './SpinnerModal';
import IntermediateSpinnerModal from './IntermediateSpinnerModal';
import Form2 from './Form';
import topRated from './Dummy(topRatedFilms).json';
import ViewWatchlist from './viewWatchList';
import ViewFilmDetails from './ViewFilmDetail';

import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';

function Registered() {
  
  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [modalShow, setModalShow] = React.useState(0);
  const places = ['Movie1', 'Movie2', 'Movie3', 'Movie4', 'Movie5'];

  function profileDeets() {
    const URLcurrent = window.location.href
    let URLcurrentsplit = URLcurrent.split('/')
    console.log("Last", URLcurrentsplit[URLcurrentsplit.length -1])
    let profIndex = URLcurrentsplit[URLcurrentsplit.length -1]
    document.location.href = "/profile/"+profIndex
    //return profIndex
  }

   let filledArray = ``
  topRated.map((key, index)=> {
    // filledArray = new Array(1).fill(`${key.title}`) + filledArray;
    filledArray = filledArray + `${key.title}*`
    console.log(filledArray)
  })
  filledArray.split('*')
  console.log(filledArray.split('*').slice(0, -1));

  
  useEffect(() => {
    if (searchText)
    {fetch(`https://api.themoviedb.org/3/search/movie?api_key=ab166ff82684910ae3565621aea04d62&language=en-US&query=${searchText}&page=1&include_adult=false`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setSearchResults(data.results);
      })
    }
  }, [searchText])


  return (
    <div>
        <Route path="/login" component={login}>
        </Route>

        <Route path="/SignUp" component={SignUp}>
        </Route>

      <div>
      <Navbar searchText={searchText} setSearchText={setSearchText}/>
      
                  {/* <div>
                <button onClick={profileDeets} type='button'>
                  Profile
                </button>
            </div> */}
            <div className="container h-75 w-75">
            {/* {topRated.map(imagesPrint)} */}
            <Carousel >
              <Carousel.Item>
                <img
                  className="d-block w-100 imageFit"
                  src={img1}
                  alt="First slide"
                />
                <Carousel.Caption className="text-md-left" >
                <h3>Second slide label</h3>
                  <h6>Genre</h6>
                  <p>Description</p>
                  <button type="button" class="btn btn-outline-primary BTN2 lab" onClick={event =>  window.location.href='https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjh8sbVjcHvAhXSfMAKHcmpBHAQPAgI'}>Watch Trailer</button>
                </Carousel.Caption>
              </Carousel.Item>
            
              <Carousel.Item>
                <img
                  className="d-block w-100 imageFit"
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
                className="d-block w-100 imageFit"
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
    <TopRatedFilms/>

    <ViewWatchlist/>
    
    {/* <Wheel items={places} /> */}
    
    <button class="float" onClick={() => setModalShow(1)}>
    {/* <Wheel items={places} /> */}
    </button>
    <SpinnerModal content={<Wheel items={filledArray.split('*').slice(0, -1)}/>}
        show={modalShow}
        onHide={() => setModalShow(0)}
        />
     </div>
      
    </div>
   

  );
}

export default Registered;


