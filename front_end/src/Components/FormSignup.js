import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';
import filmlogo from './FilmGhar2-01.png';
import { Col, Row } from 'react-bootstrap';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    
    <div className='form-content-right'>
      <div><img src={filmlogo} alt='spaceship' style={{width: '80px', height: '50px', marginLeft: '65px', marginTop: '10px'}}/></div>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
         SIGN UP
        </h1>

        {/* <Row className="comp">
          <Col className="col-md-6" style= {{ padding:'0px'}}> */}
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        {/* </Col>
        <Col className="col-md-6" style= {{ padding:'0px', paddingRight: '10px'}}> */}
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        {/* </Col>
        </Row> */}
        <Row className="comp">
          <Col className="col-md-6" style= {{ padding:'0px'}}>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        </Col>
        <Col className="col-md-6" style= {{ padding:'0px', paddingRight: '10px'}}>
        <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirm your password'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        </Col>
        </Row>
        <button className='form-input-btn' type='submit'>
          Sign up
        </button>
        <span className='form-input-login'>
          Already have an account? Login <a href='#'>here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
