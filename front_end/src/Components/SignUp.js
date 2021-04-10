import './SignUp.css';
import React, { Component, useState } from 'react';
import {Card, Row, Col, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form2 from './Form';


function SignUp() {
    return (
        <div className="scrollNo">
            <Row className="mb-0">
                <b><h1 className="heading text-center pt-5">Welcome to Film Ghar</h1></b>
            </Row>
            <Row className="mt-0">    
                <Form2/>
            </Row>
        </div>
    )
}

export default SignUp;


