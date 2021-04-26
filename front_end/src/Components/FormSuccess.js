import React from 'react';
import './Form.css';
import {Link,Redirect} from 'react-router-dom';

const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success mt-5 parent'>We have received your request!</h1>
      <Link to="/login" className="btn addedbutton mb-5 child" style={{color:'white'}}>Login Now</Link>
      {/* <Button  className = "addedbutton p-2 ml-2" >ADD TO WATCHLIST</Button> */}
    </div>
  );
};

export default FormSuccess;
