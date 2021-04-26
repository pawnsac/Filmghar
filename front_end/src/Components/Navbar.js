import {React,useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import filmlogo from './FilmGhar2-01.png';
import {Redirect, Switch, Route, Router,useHistory, Link} from 'react-router-dom';
import {Carousel, Button, Card, CardColumns, Row, Col,Form, FormControl, Container} from 'react-bootstrap';
import {browserHistory} from 'react-router';
import './Navbar.css';
import movieData from './dummy.json';
import Form2 from './Form';
import profile from './profile'
import SearchView from './Search';


function Navbar({searchText, setSearchText}) {

  const [isLog, setIsLog] = useState(false);
  const [movies,setmovies]=useState([]);
  const [genre_on, setg]=useState(false);
  const history = useHistory();

const [cg,scg]=useState("")
  var idUser = null;
var genre="Genre"
  function checkLog() {
      idUser = localStorage.getItem("user")
      if(idUser != null)
      {
        setIsLog(true);    
      }
      else
      {
        setIsLog(false);
      }
      
  }
  
const genre_load=(ev)=>{
ev.preventDefault()
scg(ev.target.value)
const g='api/genre?search='+ev.target.value
fetch(g)
  .then (response=>  response.json())
  .then (data =>{
    console.log(data)

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
      setg(true)
      
      }
      )
 


}

  const updateSearchText = (e) => {
    history.push('/searchView')
    setSearchText(e.target.value);
  }
  if(genre_on){

    setg(false);
    console.log("redirect")
    history.push('/genres',{ mov:movies, genre:cg})
        }
  return (

   
    <div className="NAVBAR">
      <nav class="navbar navbar-expand-lg navbar-dark">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/" onClick={()=>{  history.push('/'); window.location.reload(false)}}>
      <img src={filmlogo} width={70} height= {25}/>
    
    </Link>

 
     
    <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>

    
 
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="d-flex moveCenter">
              <select
                className="form-control changeW custom-select"
                onChange={genre_load}
                defaultValue={genre}
              >
                <option value="">Genre</option>
                <option selected={genre === 'Romance'} value="Romance">
                  Romance
                </option>
                <option selected={genre === 'Comedy'} value="Comedy">
                  Comedy
                </option>
                <option selected={genre === 'Action'} value="Action">
                  Action
                </option>
                <option selected={genre === 'Thriller'} value="Thriller">
                  Thriller
                </option>
                <option selected={genre === 'Horror'} value="Horror">
                  Horror
                </option>
                <option selected={genre === 'Fantasy'} value="Fantasy">
                  Fantasy
                </option>
              </select>
              <input
                class="form-control me-2 changeW custom-search"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchText}
                onChange={updateSearchText}
              />
              {/* <button class="btn BTN btn-outline-success " type="submit">Search</button> */}
            </form>

      <div className="ml-auto tabs ">
        
        {/* {movieData.filter((val)=> {
        if (searchTerm==""){return ""}
        else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())){
          return val;
          }
          
        
      }).map((val, key)=> {
        return (
          <div className="user" key={key}>
            <p style={{color: 'white'}}>{val.title}</p>
          </div>
        )
      })
        } */}
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item1">
          <Link class="nav-link active " aria-current="page" to='/allfilms'>View All Films</Link>
        </li>

        <li class="nav-item2">
        {}
        {/* const user = rememberMe ? localStorage.getItem('user') : ''; */}
        {console.log("LOCAL", localStorage.getItem("id"))}
        {!(localStorage.getItem("id") != null) ? (
          <Link to={"/login"} className="btn back-color BTN">Login</Link>
        ) : (
          <Link to={"/profile/"+localStorage.getItem("user")} className="btn back-color BTN">Profile</Link>
        )}
      
          {/* <button type="button" class="btn btn-outline-primary BTN"> Sign Up */}
          {/* <Form2/> */}
          {/* <Link class="text" to="https://www.facebook.com/">SignUp</Link> */}
          {/* </button> */}
          {/* <Link class="nav-link active" to="#">Profile</Link> */}
        </li>

            <li class="nav-item3"> 
          {(localStorage.getItem("user") != null) ? 
        <Link class="nav-link active " to={"/"} aria-current="page" className="btn back-color BTN" onClick={()=>{localStorage.clear();  history.push('/');    window.location.reload(false);}}>Logout

        </Link>
            :<></> 
          }
            
            </li>     

      </ul>
    

      </div>
    </div>
  </div>
</nav>
<div>

    </div>
    </div>

 
  )
}

  export default Navbar;
