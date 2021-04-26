/*import './TopRatedFilms.css';*/
import './viewWatchList.css';
import React from 'react';
import { toast } from "react-toastify";

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
  
  const [modalShow, setModalShow] = React.useState(0);
  const [wlist, setwlist] = React.useState([]);
  const [movies, setmovies] = React.useState([]);
  const [wmoves, setwmoves] = React.useState([]);
  const [load, setload] = React.useState(true);
  
  var csrftoken = readCookie('csrftoken');
  const id=  localStorage.getItem('user')
  var token=  localStorage.getItem('token')
  
  const fetch_wlist=()=>{
  fetch('/api/wlist',{
  method: 'GET',
  headers: {'Content-Type': 'application/json'}})
    .then (response=>  response.json())
    .then (data =>{
      toast.error(
data
      );

      console.log(data)
        var x = data.length
        var changes=data
        var y=""
        var itr=0
        var moviez=[]
        while (x!=0){
          x--
          y=changes[x].movie_id
          y=y.split(",")
          while(true){
          if(y[itr]==undefined){
            break;
          } 
          moviez.push(parseInt(y[itr]))
          itr++
          }
          changes[x].movie_id=moviez
          moviez=[]
          itr=0
        }
        console.log(changes)
        setwlist(changes)
        }
        )
  }
  
  if(wlist.length==0){
    if(token!=null){
      console.log(token)
    fetch_wlist()}
  }

  if(wlist.length>0 &&movies.length>0 && wmoves.length==0 &&load){

    const mov_list={
      user_id:id,
      movie_id:[]

    }
    console.log(wlist)
    var g= []
var len2=wlist.length
    while(len2!=0){
      len2--
      if(wlist[len2].user_id==id){
        mov_list.movie_id.push(wlist[len2].movie_id[0])
        
      } 

    }

    g=mov_list
    console.log(g)
    var len=g.movie_id.length
    var moves=[]
    while(len!=0){
      len--
      var len1=movies.length
      while(len1!=0){
        len1--
        if(g.movie_id[len]==movies[len1].id){
          moves.push(movies[len1])

        }

      }
    }
    console.log(moves)
    setwmoves(moves)
    setload(false)
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
if(movies.length==0)fetch1()  


    const renderCard = (card, index) => {
      //console.log(films.filter(wl => wl.id === card))
      console.log(card,index)
      const film = card

      
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
 
    {id==null ? <p > Login to see watchlist! </p> : <p > Films in your Watchlist </p>}
</div>

    <Slider {...settings} className="slider-cont mx-5" >
    { wmoves.map(renderCard) }
    </Slider>
   

</div>
    )};
export default  ViewWatchlist;

