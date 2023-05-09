import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "./Managemeds.css";
import { Link } from "react-router-dom";

const Managepatients = () => {
  return (
    <div className="manage-meds p-4 tc">
      <div className=" header d-flex justify-content-between mb-5">
        <h3 className="tc mb-3">Manage Patient!!</h3>
        <Link to={"/AddPatient"} className="btn btn-success">
          Add Patient
        </Link>
      </div>
      <h3>Manage Patient</h3>
      <Table >
        <thead>
          <tr>
            <th>#</th>
            {/*<th>Image</th>*/}
            <th>patient Name</th>
            <th>description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            {/*<td><img src='https://picsum.photos/200/300' alt="" className='image-avatar' /></td>*/}
            <td>User1</td>
            <td>stomach ache patient</td>
            <td>
              <Button className="btn btn-sm btn-danger">Delete</Button>
              <Link
                to={"/UpdatePatients"}
                className="btn btn-sm btn-primar mx-2"
              >
                Update
              </Link>
              <Link to={"/ViewPatients"} className="btn btn-sm btn-info">
                View
              </Link>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Managepatients;
