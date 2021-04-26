import React, { useEffect,Component, useState} from 'react';
import {Form, Card, Button, Tab, Tabs} from 'react-bootstrap';
import {Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.js";
import topRated from './Dummy(topRatedFilms).json';
import './ViewFilmDetail.css';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Container from 'react-bootstrap/Container'
import StarRating from "./Rating"; 
import movieReviews from './Reviews.json';
import users from './Users.json';
import axios from "axios";
import Rating from '@material-ui/lab/Rating';
import { toast,ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Authorization:  'Token ${token}'
const baseURL = 'https://agile-badlands-70924.herokuapp.com/api/v1/users/'

function ViewFilmDetails(props){

	console.log(props.location.state.referrer)
	 const style = {
       paddingLeft: '15px'


  };

  const [actorData, setActordata] = React.useState([])
  const [actors, setactors] = React.useState([])
  const [reviews, setreviews] = React.useState([])
  const [review_text, setreview] = React.useState('')

const success_rate=()=>{
toast.success("You rated a film!")

}
  const fetch_actors=()=>{

    fetch(`/api/cast`)
    .then(response => response.json())
    .then(data => {
      var x = data.length
      var changes=data
      var y=""
      var itr=0
      while (x!=0){
        x--
        y=changes[x].movies
        y=y.split(",")
        changes[x].movies=y
        console.log(y)
      }
      console.log(changes)
      setactors(changes);
    })


}
const fetch_reviews=()=>{

  fetch(`/api/reviews`)
  .then(response => response.json())
  .then(data => {
    setreviews(data);
    console.log(data)
  })


}
if(actors.length==0) fetch_actors();
if(reviews.length==0) fetch_reviews();
  
  console.log("ACTORS")
  console.log(props.location.state.referrer.actors)

/*  	const [values, setValues] = React.useState({
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
  const options = {
  method: 'GET',
  url: 'https://imdb8.p.rapidapi.com/actors/get-bio',
  params: {nconst: 'nm0001667'},
  headers: {
    'x-rapidapi-key': 'e5ee6d7a07mshdf345140ec8c77bp14f39fjsn3523e12e8c89',
    'x-rapidapi-host': 'imdb8.p.rapidapi.com'
  }
};
useEffect(()=>{
axios.request(options).then(function (response) {
	setActordata(response.data)
	console.log(response.data);
	console.log("setdata",actorData.image)
}).catch(function (error) {
	console.error(error);
});},[]);

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

const handle_review_submit=()=>{
  console.log('reviews')

  if(id!=null){
  fetch('/api/addr', {
    method: 'POST',
    headers: {'Content-Type': 'application/json',
    "X-CSRFToken":csrftoken
     },
    body: JSON.stringify({
      user_id: id,
      movie_id: props.location.state.referrer.id,
      review: review_text
    })
  })
  .then( data => data.json())
  .then(
    data => {
      console.log(data);
      setreview("")
      if(!(data.review[0]=="This field may not be blank.")){
        toast.success("Added a review")}
        else{
         toast.error("Please type something again!")
        }
 
      fetch_reviews()
      

    }
  )
  }
}


const handle_review=(event)=>{
  setreview(event.target.value)

}
  const findActorname = (id) => actors.map(actor => {
  // if this task has the same ID as the edited task
    if (id === actor.id) {
      return (actor.name)
    }
})
    const findActorimg = (id) => actors.map(actor => {
  // if this task has the same ID as the edited task
    if (id === actor.id) {
      //
      return (actor.image)
    }})
        const findActorType = (id) => actors.map(actor => {
  // if this task has the same ID as the edited task
    if (id === actor.id) {
      //
      return (actor.type)
    }})



      const renderCard = (card, index) => {
    return (
           
            <Card style={{ width: '18rem'}} className="box2">
                  <Link to={{pathname: `/nametag/${card}`, state: { referrer: card }}}>    
                    <Card.Img variant="top"  style={{height: '12rem' }} src={findActorimg(card)} />
                    <Card.Body className="color"  style={{height: '7rem', position: "relative"}}>
                    <div>
                        <Card.Title style={{ textAlign: 'justify', position: "absolute"}}>{findActorname(card)}</Card.Title>
                         <Card.Text className="person-type-text">{findActorType(card)}</Card.Text>
                         </div>
                    </Card.Body>
                  </Link>
            </Card>
    )}


return (

<Container className="film-detail-container">

	<div className="moviestill"  style={{ background: 'url(http://news.bbc.co.uk/media/images/47822000/jpg/_47822025_faiz_rahi_aarzo_zeba766.jpg)'}}>
  <>
        <ToastContainer draggable={false} autoClose={2500}/>
</>
  	<Row >
		 <Col >
       	<img className= "poster" src={props.location.state.referrer.posterUrl}/>
    	</Col>
		<Col>
       <h2 className = "title">{props.location.state.referrer.title}</h2>
       <div className= "genre"> 
       {props.location.state.referrer.genres.map(genre => (
       		<span>{genre} </span>
       		))}
       	</div>
       	<div className= "trailer"><a href={props.location.state.referrer.trailer}><YouTubeIcon/>  Trailer</a></div>
        <p className= "rating">Rating: {props.location.state.referrer.rating}</p>

       <p className= "plot">{props.location.state.referrer.plot}</p>
      
       </Col>
    	</Row>
      </div>
      
          <Row className="">

        <nav>

            <div class="nav nav-tabs nav-fill " id="nav-tab" role="tablist">

                <a class="nav-item nav-link" id = "person-tab" data-toggle="tab"  href = "#nav-person" role="tab" >Cast/Crew</a>
                <a class="nav-item nav-link"   data-toggle="tab"  href = "#nav-plot" role="tab"  >Plot</a>
                <a class="nav-item nav-link"  data-toggle="tab"  href = "#nav-images"  role="tab" >Images</a>
                <a class="nav-item nav-link"  data-toggle="tab"  href = "#nav-genre" role="tab" >Genre</a>
            </div>
            	<div class="tab-content py-3 px-3 px-sm-0" >
					<div class="tab-pane active" id="nav-person" role="tabpanel" >
					<div className = "film-detail-card">{props.location.state.referrer.actors.map(renderCard)}{renderCard(props.location.state.referrer.director)}
					</div>

					</div>
					<div class="tab-pane fade" id="nav-plot" role="tabpanel" >
					{props.location.state.referrer.plot}
					</div>
					<div class="tab-pane fade" id="nav-images" role="tabpanel">
					<Row>
					{props.location.state.referrer.images.map(image => (
       		<Col ><img className = "film-detail-images-img" src = {image}/></Col>))}
       		</Row>
       		
					</div>
					<div class="tab-pane fade" id="nav-genre" role="tabpanel" >
					       {props.location.state.referrer.genres.map(genre => (
       		<div className = "name-tag-button-container"><Button className= "name-tag-button">{genre} </Button></div>
       		))}
					</div> 
				</div>
        </nav>
      </Row>
      <Row>
      <h4 className="review-title" style={{color:'white'}}> Rate </h4> <div><StarRating movie={props.location.state.referrer} toastt={success_rate}/></div> 
      <h4 className="review-title">
      Review
      </h4>
      <Form.Group >
      <Row>
      <div>

<div className = "review-user"><img className = "placeholder-image" src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" alt="Avatar"/></div>
 
 
 {/*<Row><Rating name="half-rating-read" value={props.location.state.referrer.rating} precision={0.5} readOnly /> </Row>*/}
 <div className ="review-text"> <Form.Control className="comment-form" type="text" placeholder="Write a comment" onChange={handle_review} /> <Button className="btn btn-primary someTweaks ml-1" variant="outline-success" onClick={()=>handle_review_submit()} style={{color:'white'}} > Submit </Button> {/* <FaCheck className="col" color="white" onClick={() => console.log("CONSOLE>LOF")}/> */} </div>
 
  </div>
  </Row>
  
</Form.Group>
      </Row>

      <Row>
{reviews.filter(revw => revw.movie_id === props.location.state.referrer.id).map(revw => (
	<div className = "all-reviews-container">
       		{users.filter(user => user.id === revw.user_id).map(user => (
       			<div className = "review-container">
       			
       			<div ><img className = "placeholder-image" src = {user.photo}/></div>
       			<div >{/*<div><Rating name="half-rating-read" value={revw.rating} precision={0.5} readOnly /></div>*/}<div className = "review-username">{user.username}</div><div className ="review-text" >{revw.review}</div></div>
       			</div>
       			)) }
       		
    
    </div>
       		))}
      </Row>
      </Container>



)}
export default ViewFilmDetails;