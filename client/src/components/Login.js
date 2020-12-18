import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const StyledLogin = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 5rem;
  }

  .login {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  input {
    padding: 0.5rem 1rem;
    width: 15rem;
    margin: 0.3rem 0;
  }

  form {
    margin: 1rem;
  }

  button {
    padding: 0.4rem;
    margin: 0.5rem 0;
    width: 6rem;
  }

`

const initialValues = {
  username: '',
  password: '',
}

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [formValues, setFormValues] = useState(initialValues)
  const { push } = useHistory()

  const handleChange = e => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }
   const handleSubmit = e => {
    e.preventDefault()
    axios.post('http://localhost:5000/api/login', formValues)
    .then(res => {
      localStorage.setItem('token', res.data.payload)
    })
    .then(push('/api/colors'))
    .catch(err => {
      console.log(err)
    })
   }

  return (
    <>
    <StyledLogin>
      <div className='container'>
        <h1>Bubble App!</h1>
        <div className='login'>
          <form onSubmit={handleSubmit}>
            <input 
              type='text'
              name='username'
              placeholder='username'
              value={formValues.username}
              onChange={handleChange}
            />
            <input 
              type='text'
              name='password'
              placeholder='password'
              value={formValues.password}
              onChange={handleChange}
            />
            <button>login</button>
          </form>
        </div>
      </div>
    </StyledLogin>
    </>
  );
};

export default Login;
