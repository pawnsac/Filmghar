import './login.css';
import React, { Component, useState } from 'react';
import {Card, Row, Col, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormLogin from './loginHelper';


function Login() {

    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }


    return (
        <div className="scrollNo">
            <Row className="mb-0">
                <b><h1 className="heading text-center pt-5">Welcome Back</h1></b>
            </Row>
            <Row className="mb-0">
                <b><h6 className="heading text-center pt-5">Indulge in the reminisce of old Pakistani films since the early 1970s till 2019!</h6></b>
            </Row>
            <Row className="mt-0">    

                <div className='form-container'>
                    {/* <span className='close-btn'>×</span> */}
                    <div className='form-content-left'>
                    <img className='form-img box lg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Srffcii2U8c-vYoi4o4jOZMYM-eIN7SWcQ&usqp=CAU' alt='spaceship' />
                    </div>
                    {/* <div>Hello</div> */}
                    {/* <formLogin/> */}
                    {/* {!isSubmitted ? ( */}
                    <FormLogin submitForm={submitForm} />
                    {/* ) : (
                        <div className='form-content-right'>
                            <h1 className='form-success'>We have received your request!</h1>
                            <img className='form-img-2' src='img/img-3.svg' alt='success-image' />
                        </div>
                    )} */}
                </div>
            </Row>

        </div>
    )
}

export default Login;


