import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Form from 'react-bootstrap/Form';

const Updatemeds = () => {
  const [medicineData, setMedicineData] = useState({
    name: '',
    description: '',
    price: '',
    expireDate: '',
    categoryName: ''
  });
  const [formErrors, setFormErrors] = useState({
    name: '',
    description: '',
    price: '',
    expireDate: '',
    categoryName: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMedicineData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // form validation
    let errors = {};
    if (!medicineData.name) {
      errors.name = 'Name is required';
    }
    if (!medicineData.description) {
      errors.description = 'Description is required';
    }
    if (!medicineData.price) {
      errors.price = 'Price is required';
    }
    if (!medicineData.expireDate) {
      errors.expireDate = 'Expire date is required';
    }
    if (!medicineData.categoryName) {
      errors.categoryName = 'Category name is required';
    }
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) {
      return;
    }

    const data = JSON.stringify({
      "name": medicineData.name,
      "description": medicineData.description,
      "price": medicineData.price,
      "expireDate": medicineData.expireDate,
      "categoryName": medicineData.categoryName
    });

    const config = {
      method: 'patch',
      maxBodyLength: Infinity,
      url: 'http://localhost:5000/medicine/1',
      headers: { 
        'token': 'your_token', 
        'Content-Type': 'application/json'
      },
      data : data
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        // handle successful submission here
      })
      .catch((error) => {
        console.log(error);
        // handle submission error here
      });
  };

  return (
    <div className='Login-container'>
      <Form onSubmit={handleSubmit}>
        <h1>Update medicine</h1>
        <Form.Group className='mb-3' controlId='name'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter name'
            name='name'
            value={medicineData.name}
            onChange={handleInputChange}
            isInvalid={formErrors.name}
          />
          <Form.Control.Feedback type='invalid'>
            {formErrors.name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='mb-3' controlId='description'>
          <Form.Label>Description</Form.Label>
          <Form.Control
            as='textarea'
            placeholder='Enter description'
            name='description'
            value={medicineData.description}
            onChange={handleInputChange}
            isInvalid={formErrors.description}
          />
          <Form.Control.Feedback type='invalid'>
            {formErrors.description}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='mb-3' controlId='price'>
          <Form.Label>Price</Form.Label>
          <Form.Control
            type='number'
            placeholder='Enter price'
            name='price'
            value={medicineData.price}
            onChange={handleInputChange}
            isInvalid={formErrors.price}
          />
          <Form.Control.Feedback type='invalid'>
            {formErrors.price}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='mb-3' controlId='expireDate'>
          <Form.Label>Expire Date</Form.Label>
          <Form.Control
            type='date'
            placeholder='Enter expire date'
            name='expireDate'
            value={medicineData.expireDate}
            onChange={handleInputChange}
            isInvalid={formErrors.expireDate}
          />
          <Form.Control.Feedback type='invalid'>
            {formErrors.expireDate}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className='mb-3' controlId='categoryName'>
          <Form.Label>Category Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter category name'
            name='categoryName'
            value={medicineData.categoryName}
            onChange={handleInputChange}
            isInvalid={formErrors.categoryName}
          />
          <Form.Control.Feedback type='invalid'>
            {formErrors.categoryName}
          </Form.Control.Feedback>
        </Form.Group>

        <Button className='btn btn-dark' variant='primary' type='submit'>
          Update
        </Button>
      </Form>
    </div>
  );
};

export default Updatemeds;