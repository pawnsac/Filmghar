import './allFilms.css';
import React, { Component, useState } from 'react';
import {Card, Row, Col, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import movieData from './dummy.json';
import VerticalModal from './VerticalModal';
import StarIcon from '@material-ui/icons/Star';
import {Link,Redirect} from 'react-router-dom';
import { FaInfoCircle } from 'react-icons/fa';
import { toast,ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function SearchView({keyword,searchResults}) {
    // const [results, setResults] = React.useState(``)
    let results = "Showing results for " + keyword;
    const [modalShow, setModalShow] = React.useState(0);
    const [wlist, setwlist] = React.useState([]);
    const s=  localStorage.getItem('token')
    const [gl, setgl] = React.useState([]);
  
  
    // if (keyword !== searchResults)
    // {
    //     return ( <div>No Results found</div>)
    // }
    // if (keyword == '')
    // {
    //     return (
    //         ''
    //     // <App/>
    //     // <div>
    //     // <div>No Results found</div>
    //     // </div>
    //     )
       
    // }


    const add_to_watch_list=(film_id)=>{
        console.log("watchlist",wlist)
        
      if(s!=null){
          const x=film_id.toString()
          console.log(x)
          a2w(x)
          }
      
      }
      
      const a2w=(x)=>{
      
        fetch('/api/wlist', {
          method: 'POST',
          headers: {'Content-Type': 'application/json',
          "X-CSRFToken":csrftoken},
          body: JSON.stringify({
            user_id: id,
            movie_id: x
          })
        })
        .then( data => data.json()
        )
        .then(
          data => {
            console.log(data);
            if(!(data.non_field_errors!=undefined)){
           toast.success("Added to Watch List")}
           else{
               console.log("ooof")
            toast.error("Already in Watch List")
           }
          }
        )
        
      }
      
      function readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
      }
      
      var csrftoken = readCookie('csrftoken');
      const id=  localStorage.getItem('user')
      const token=  localStorage.getItem('token')
      const fetch_wlist=()=>{
      fetch('/api/wlist',{
      method: 'GET',
      headers: {'Content-Type': 'application/json',
      "X-CSRFToken":csrftoken}})
        .then (response=>  response.json())
        .then (data =>{
           
            setwlist(data)
            }
            )
      }
      
      if(token!=null&&wlist.length==0){
      
        fetch_wlist()
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
    
         <Button  className = "addedbutton" onClick={()=>add_to_watch_list(card.id)} >ADD TO WATCHLIST</Button>
        
     </Card.Body>
    { /* <AddCircleIcon fontSize= "large" style={{position:"absolute" ,marginLeft: "190px",color: "#D4AF37"}}  />*/}
    </Card>
               
        )}


    return (
        <div>
                      <>
            <ToastContainer draggable={false} autoClose={2500}/>
            </>
    {/* <h3 className="txtAllFilms text-color">{results}</h3> */}
    <div className="grid container-fluid">{searchResults.length === 0 ? (<h3 className=" p-4 text-color">No results found</h3>) : searchResults.map(renderCard)}</div>
        </div>
    )

};
export default SearchView;