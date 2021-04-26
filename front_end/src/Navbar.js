import {React, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import filmlogo from './FilmGhar2-01.png';
import {Redirect, Router, useHistory, Link} from 'react-router-dom';
import {Carousel, Button, Card, CardColumns, Row, Col,Form, FormControl, Container} from 'react-bootstrap';
import {browserHistory} from 'react-router';
import './Navbar.css';
import movieData from './dummy.json';
import Form2 from './Form';
import profile from './profile'


function Navbar({searchText, setSearchText}) {

  const [isLog, setIsLog] = useState(false);
  var idUser = null;
var genre="romance"
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
  const history = useHistory();

  const updateSearchText = (e) => {
    history.push('/searchView')
    setSearchText(e.target.value);
  }
  return (
    <div className="NAVBAR">
      <nav class="navbar navbar-expand-lg navbar-dark">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">
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
                onChange={()=>{}}
                defaultValue={genre}
              >
                <option value="">Genre</option>
                <option selected={genre === 'romance'} value="romance">
                  Romance
                </option>
                <option selected={genre === 'comedy'} value="comedy">
                  Comedy
                </option>
                <option selected={genre === 'action'} value="action">
                  Action
                </option>
                <option selected={genre === 'thriller'} value="thriller">
                  Thriller
                </option>
                <option selected={genre === 'horror'} value="horror">
                  Horror
                </option>
                <option selected={genre === 'fantasy'} value="fantasy">
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
        {/* {!(localStorage.getItem("id") != null) ? (
          <Link to={"/login"} className="btn back-color BTN">Login</Link>
        ) : (
          <Link to={"/profile/"+localStorage.getItem("user")} className="btn back-color BTN">Profile</Link>
        )} */}
      
          {/* <button type="button" class="btn btn-outline-primary BTN"> Sign Up */}
          {/* <Form2/> */}
          {/* <Link class="text" to="https://www.facebook.com/">SignUp</Link> */}
          {/* </button> */}
          {/* <Link class="nav-link active" to="#">Profile</Link> */}
        </li>

            <li class="nav-item3"> 
        <Link class="nav-link active " to={"/"} aria-current="page" className="btn back-color BTN" onClick={()=>{localStorage.clear()}}>Logout</Link>
             </li>     

      </ul>
    

      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

  export default Navbar;
