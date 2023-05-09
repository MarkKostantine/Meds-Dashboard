import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const UpdateCat = () => {
  return (
    <div style={{width:"60%",margin:"25px auto"}}>
      <Form>
        <h1>Update Patient</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Patient name" />
        </Form.Group>

        <Form.Group className="mb-3">
          <textarea
            className="Form-control w-100"
            rows={5}
            placeholder="DESCRIPTION"
          ></textarea>
        </Form.Group>
        <Form.Group className="mb-3">
          {/*<input type='file' className='forms-control'/>*/}
        </Form.Group>
        <Button className="btn btn-dark" variant="primary" type="submit">
          Update
        </Button>
      </Form>
    </div>
  );
};

export default UpdateCat;
