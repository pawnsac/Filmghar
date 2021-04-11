import React, { useEffect,Component, useState} from 'react';
import {Form, Card, Button, Tab, Tabs} from 'react-bootstrap';
import {Row, Col} from 'react-bootstrap';
import Container from 'react-bootstrap/Container'
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.js";
import './profile.css';


function profileDetails(props){
    //const identity =  props.location.pathname
    const [users,setusers]=useState([])
    let varPar = (props.location.pathname).split('/')
    const id = varPar[2]
    console.log("Ideee", varPar[2])
    const identity = parseInt(id)

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
  
    
    var csrftoken = readCookie('csrftoken')
    
    const fetch1 = ()=>{
    
        fetch('http://127.0.0.1:8000/api/users/', {
            method: 'GET',
            headers: {'Content-Type': 'application/json',
            "X-CSRFToken":csrftoken }
          })
          .then( data =>{
            console.log(data)

            return data.json()})
          .then(
            data => {
            
                  setusers(data)
                })
            }        
fetch1()



    const nameUser = (id) => users.map(user => {

        console.log(users)
        if (id === user.id) {
            return (user.username)
        }
    })

    const emailUser = (id) => users.map(user => {
        console.log(users)
        if (id === user.id) {
            return (user.email)
        }
    })



    const ifNotLogged = () => {
        console.log("In here", localStorage.getItem("id"))
        if(localStorage.getItem("id") !== null)
        {
            return (
            <Link to={{pathname: `/SignUp`}}>
                <button type="button" class="btn btn-outline-primary buttonLog">
                    Signup/Logout
                </button>
            </Link>)
        }
        else
        {
            return(
            <Link to={{pathname: `/SignUp`}}>
                <button type="button" class="btn btn-outline-primary buttonLog">
                    Signup/Logout
                </button>
                {localStorage.clear()}
            </Link>)
        }
        
    }

    return(
        <div>
            <div><img className = "profileImage" src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" alt="Avatar"/></div>

            <ul className="navbar-nav userName">
                <li>
                    {/* <div class="userName"> {nameOf(identity)} </div> */}
                </li>
                <li>
                    {ifNotLogged()}
                </li>
            </ul>

            <Row>
                <nav>
                    <div class="nav nav-tabs nav-fill line">
                        <div class="nav-item nav-link colorMus">Profile</div>
                        <div class="nav-item nav-link">Watchlist</div>
                        <div class="nav-item nav-link">Customlist</div>
                        <div class="nav-item nav-link">History</div>
                    </div>
                </nav>
            </Row>

            <div className="backBox">
                <Row>
                    <Col>
                    <div className="insideRecs">                   
                        Username: {nameUser(identity)}
                        <button type="button" class="btn btn-outline-primary buttonUser"> Change Username</button>
                    </div>
                        
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <div className="insideRecs">                   
                        Email: {emailUser(identity)}
                        <button type="button" class="btn btn-outline-primary buttonEmail"> Change Email</button>
                    </div>
                        
                    </Col>
                </Row>
            </div>
            

        </div>

    )
};
export default profileDetails;
