import React , {useState} from 'react';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import "./css/Register.css"

const Register = () => {
  const [RegisterData,SetRegData]= useState({ name: '', email: '', password: '', cPassword: '', phone: '' });

  const handleRegister = (event) => {
    event.preventDefault();

    if (!RegisterData.name || !RegisterData.email || !RegisterData.password || !RegisterData.cPassword || !RegisterData.phone) {
      // handle form validation error here, e.g. display error message
      console.log('Please fill out all required fields.');
      return;
    }

    if (RegisterData.password !== RegisterData.cPassword) {
      // handle form validation error here, e.g. display error message
      console.log('Passwords do not match.');
      return;
    }

    axios.post('http://localhost:5000/auth/signUp', RegisterData)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        // handle successful registration here, e.g. redirect to login page
      })
      .catch((error) => {
        console.log(error);
        // handle registration error here, e.g. display error message
      });
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    SetRegData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }

  return(
    <div className='Register-container' >
      <Form>
        <h1>Registration Form</h1>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" value={RegisterData.name} onChange={handleChange} placeholder="Enter Your Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" value={RegisterData.email} onChange={handleChange} placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" value={RegisterData.password} onChange={handleChange} placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" name="cPassword" value={RegisterData.cPassword} onChange={handleChange} placeholder="Confirm Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" name="phone" value={RegisterData.phone} onChange={handleChange} placeholder="Enter Your Phone" />
        </Form.Group>
        <Link className="btn btn-dark" to={'/'} onClick={handleRegister}>Submit</Link>
      </Form>
    </div>
  );
};

export default Register;