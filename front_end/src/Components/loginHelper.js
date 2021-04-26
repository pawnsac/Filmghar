// import React from 'react';
import React, { useState } from "react";
import './Form.css';
import filmlogo from './FilmGhar2-01.png';
import { Col, Row } from 'react-bootstrap';
import {Link,Redirect} from 'react-router-dom';
import userInfo from './Users.json';


const FormLogin = () => {

    const [email, setEmail] = useState("");
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);

    const setid_user=(val,token)=>{
 
      localStorage.setItem('rememberMe', true);
      localStorage.setItem('user', val);
      localStorage.setItem('token', token);

  }
    var username = ""
    var temp_id=0
    function validateForm() {
        return email.length > 0 && password.length > 0;
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
  
    function handleSubmit(event) {

        event.preventDefault();





        fetch('api/users/', {
          method: 'GET',
          headers: {'Content-Type': 'application/json',
          "X-CSRFToken":csrftoken }
        })
        .then( data => data.json())
        .then(
          data => {
            data.map(user => {
                if(user.email === email)
                { 
                    username=user.username
                    temp_id=user.id

                }
              })
          }
        ).then(()=>{
      fetch('api/auth', {
        method: 'POST',
        headers: {'Content-Type': 'application/json',
        "X-CSRFToken":csrftoken },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,

        })
      })
      .then( data => data.json())
      .then(
        data => {
          if(data.token==undefined){
            console.log("Not accepted")
          }else{
            setId(temp_id)
            setIsSuccess(true)
            setid_user(temp_id,data.token)
          }
          console.log(data);
        }
      )
      })



      }

    const handleLog = () => {
      if (isSuccess)
      {
        console.log("Successful")
        localStorage.setItem("id", id)
        document.location.href = "/"
        // return <Redirect to={{
        //   pathname: '/',
        //   state: { referrrer: id }
        // }} />
   
      }
      else{
        console.log("Not successful")
        //alert("Invalid Credentials")
      }
    }

  return (
    
    <div className='form-content-right'>
      <div><img src={filmlogo} alt='spaceship' style={{width: '80px', height: '50px', marginLeft: '65px', marginTop: '10px'}}/></div>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
            LOGIN
        </h1>

        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Row className="comp">
            <Col className="col-md-6" style= {{ padding:'0px'}}>
              {console.log(isSuccess)}
                {/* <Link to={{pathname: `/`}}> */}
                <button onClick={handleLog} className='form-input-btn' type='submit' disabled={!validateForm()}>
                  Login
                  </button>
                {/* </Link> */}
        
            </Col>
        
            <Col className="col-md-6" style= {{ padding:'0px'}}>
                <Link to={{pathname: `/SignUp`}}>
                    <button className='form-input-btn' type='submit'>
                    Create Account
                    </button>
                </Link>
            </Col>
        </Row>

      </form>
    </div>
  );
};

export default FormLogin;
