import { useState, useEffect } from 'react';


const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
 
  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };
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

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    fetch('api/users/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json',
      "X-CSRFToken":csrftoken },
      body: JSON.stringify({
        username: values.username,
        email: values.email,
        password: values.password,
      })
    })
    .then( data => data.json())
    .then(
      data => {
        console.log(data);
      }
    )
    setIsSubmitting(true);
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
