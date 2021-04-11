import './nametag.css';
import React from 'react';
import {Card, Button, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link,Redirect} from 'react-router-dom';
import VerticalModal from './VerticalModal.js';
import { FaInfoCircle } from 'react-icons/fa';
import StarIcon from '@material-ui/icons/Star';
import AddCircleIcon from '@material-ui/icons/AddCircle';


function NameTags(props) {

    const identity =  props.location.state.referrer
    const [modalShow, setModalShow] = React.useState(0);
    const [actorData, setActordata] = React.useState([])
    const [movieList, setMovieList] = React.useState([])
    const [movies_all, setmovies] = React.useState([])
    const moviesList = []
    const [actors, setactors] = React.useState([])

const fetch_actors=()=>{

    fetch(`https://whispering-mountain-02462.herokuapp.com/api/cast`)
    .then(response => response.json())
    .then(data => {
      var x = data.length
      var changes=data
      var y=""
      var itr=0
      var mov=[]
        
      while (x!=0){
        x--
        y=changes[x].movies
        y=y.split(",")
        itr=y.length
        while(itr!=0){
            itr--
            if(itr==0){
            mov.push(y[itr])
                break
            }
            mov.push(y[itr])
            
        
        }

        changes[x].movies=mov
        mov=[]
      }
      console.log(changes)
      setactors(changes);
    })


}

const fetch1 =  ()=>{

  fetch('https://whispering-mountain-02462.herokuapp.com/api/allfilms')
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
    
      setmovies(changes)
      }
      )
}
fetch1()

fetch_actors()

    const filterMovies = (id) => {
        
        const movies = moviesByThem(id)[id-1]
        console.log("Movies: ", movies)         
        const moviesList = []
        let l = []

        movies_all.map(eachM => {
            console.log("Filterrrrr: ", (movies_all.filter(movie => movie.title === eachM)))
            l.push(movies_all.filter(movie => movie.title === eachM))
            movies_all.filter(movie => movie.title === eachM).map(fil => {
                moviesList.concat(fil)
            })
        })
        return l

        // (moviesByThem(id)[id-1]).map(eachM => {movies_all.filter(movie => movie.title === eachM)})

    }
    
    
    const nameActor = (id) => actors.map(actor => {
        if (id === actor.id) {
        return (actor.name)
        }
    })

    const imageActor = (id) => actors.map(actor => {
        if (id === actor.id) {
            return (actor.image)
        }
    })

    const typeActor = (id) => actors.map(actor => {
        if (id === actor.id) {
            return (actor.type)
        }
    })

    const desActor = (id) => actors.map(actor => {
        if (id === actor.id) {
            return (actor.description)
        }
    })

    const moviesByThem = (id) => actors.map(actor => {
        if (id === actor.id) {
            console.log("moviesByThem", actor.movies)
            return (actor.movies)
        }
    })

    const nameTagBox = (card, index) => {
        return(
            <div class="nametagBox"></div>    
        )
    }

    const renderCard = (card, index) => {
    return (
            <Card style={{ width: '16rem', position: "relative"}} className="box22">
                <Link to={{pathname: `/movie/${card.id}`, state: { referrer: card }}}>
                    <Card.Img variant="top"  style={{height: '18rem' }} src={card.posterUrl} />
                </Link>
                < Card.Body className="color"  style={{height: '12rem' , position: "relative"}}>
                    <Card.Text><StarIcon  style={{color: '#D4AF37' }}/>  {card.rating} <FaInfoCircle color="white"  style={{float: "right" }} onClick={() => setModalShow(card.id)}/>
                    </Card.Text>
                       
                    <Row>
                        <Col>
                            <Card.Title className="text-color" style = {{position: "absolute"}}>{card.title}</Card.Title>
                        </Col>
                    </Row>

                    <Button  className = "addedbuttonWatch" >ADD TO WATCHLIST</Button>
                    <VerticalModal content={card} show={modalShow===card.id} onHide={() => setModalShow(0)}/>
                </Card.Body>
                  { /* <AddCircleIcon fontSize= "large" style={{position:"absolute" ,marginLeft: "190px",color: "#D4AF37"}}  />*/}
            </Card>           
    )}

    return (
        <div>
            <div className="nametagBox">
    
                <div className="nameActor">
                    {nameActor(identity)}
                </div>

                <div className="typeActor">
                    {typeActor(identity)}
                </div>

                <table>
                    <tbody>
                        <tr>
                            <td><img className = "imageSize" src = {imageActor(identity)}/></td>
                            <td className="desText">{desActor(identity)}</td>
                        </tr>
                    </tbody>   
                </table>

            </div>            
            
            {/* <div className="my-5">
                <div className="grid2 conatainer-fluid justify-content-center mx-5">{movies_all.map(renderCard)}</div>
            </div> */}

            <div>
                {console.log("filterMovies: ", filterMovies(identity))}
            </div>

            <div className="grid2 conatainer-fluid justify-content-center mx-5">
                {(filterMovies(identity).map(list => list.map(renderCard)))}
            </div>
            
        </div>
    )};

    

export default  NameTags;