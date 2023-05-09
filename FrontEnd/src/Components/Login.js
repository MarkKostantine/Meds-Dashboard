import React , {useState} from 'react';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import "./css/Login.css"


const Login = () => {
  const [LoginData,SetData]= useState({ email: '', password: '' });

  const handleLogin = (event) => {
    event.preventDefault();

    axios.post('http://localhost:5000/auth/logIn', LoginData)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        // handle successful login here, e.g. redirect to dashboard
      })
      .catch((error) => {
        console.log(error);
        // handle login error here, e.g. display error message
      });
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    SetData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }

  return(
    <div className='Login-container'>
      <Form>
        <h1>Login Form</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" value={LoginData.email} onChange={handleChange} placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" value={LoginData.password} onChange={handleChange} placeholder="Password" />
        </Form.Group>

        <Link className="btn btn-dark" to={'/'} onClick={handleLogin}>Submit</Link>
      </Form>
    </div>
  );
};

export default Login;