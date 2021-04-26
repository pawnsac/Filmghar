import './allFilms.css';
import React, { Component } from 'react';
import {Card, Row, Col, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import movieData from './Dummy(topRatedFilms).json';
import VerticalModal from './VerticalModal.js';
import { FaInfoCircle } from 'react-icons/fa';
import StarIcon from '@material-ui/icons/Star';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {Link,Redirect} from 'react-router-dom';
import { toast,ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// function AllFilms() {
//      const [modalShow, setModalShow] = React.useState(0);
//      const addToWatchlist = (film) => {
//         /*get watchlist, search for our watchlist, post request to our watchlist*/
//        /*const wltoadd = watchlists.filter(wl => wl.user_id === user)*/
//        /*   const [values, setValues] = React.useState({
//     id: '',
//     movie_id: '',
//     review: ''
//   });
// */


function AllFilms() {
  const [modalShow, setModalShow] = React.useState(0);
  const [movies, setmovies] = React.useState([]);
  const [wlist, setwlist] = React.useState([]);
  const s=  localStorage.getItem('token')
  const [gl, setgl] = React.useState([]);

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
      toast.error("Already in Watch List")
     }
    }
  )
  
}
const fetch1 =  ()=>{

  fetch('api/allfilms')
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
        
        itr=0
      }
      console.log(changes)
      setmovies(changes)
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

if(movies.length==0) fetch1();
  
    const renderCard = (card, index) => {

    return (
           

      <Card style={{ width: '16rem', position: "relative"}} className="box2 rounded">
          <>
      
</>

      <Link
            to={{
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

        <Button  className = "addedbutton" onClick={(event)=>{ event.preventDefault();add_to_watch_list(card.id)}} >ADD TO WATCHLIST</Button>
        <VerticalModal content={card}
          show={modalShow===card.id}
          onHide={() => setModalShow(0)}
          />
      </Card.Body>
      {/*<AddCircleIcon fontSize= "large" style={{position:"absolute" ,marginLeft: "190px",color: "#D4AF37"}}  />*/}
      </Card>
            // <Card style={{ width: '18rem' }} className="box">
            //         <Card.Img variant="top" src={card.image} />
            //         <Card.Body className="color">
            //             <Card.Title className="text-color">{card.title}</Card.Title>
            //             <Card.Text className="text-color">{card.year}</Card.Text>
            //             <Button variant="primary">Go somewhere</Button>
            //         </Card.Body>
            // </Card>

           
    )}

    return (
        <div>
          <>
            <ToastContainer draggable={false} autoClose={2500}/>
            </>
        <div className="section-heading">
    <h3 >All Films</h3>
    </div>
    <div className="grid container-fluid">{movies.map(renderCard)}</div>
        </div>
    )};
export default AllFilms;