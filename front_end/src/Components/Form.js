import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';

// import img4 from './img4.jpg';

const Form2 = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        {/* <span className='close-btn'>×</span> */}
        <div className='form-content-left'>
          <img className='form-img box lg' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Srffcii2U8c-vYoi4o4jOZMYM-eIN7SWcQ&usqp=CAU' alt='spaceship' />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form2;
