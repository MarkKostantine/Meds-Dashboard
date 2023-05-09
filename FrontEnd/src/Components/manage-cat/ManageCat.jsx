import React, { useState } from "react";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "../Manage-Meds/Managemeds.css";
const ManageCat = () => {
  const [catgeories, setCategories] = useState([
    { id: "1", discription: "For Headache", catName: "Headache Meds" },
  ]);
  return (
    <div className="manage-meds p-4 tc">
      <div className=" header d-flex justify-content-between mb-5">
        <h3 className="tc mb-3">Manage Catgeories!!</h3>
        <Link to={"/AddPatient"} className="btn btn-success">
          Add Patient
        </Link>
      </div>
      <h3>Manage Catgeories</h3>
      <Table className="striped bordered hover mb-3" >
        <thead>
          <tr>
            <th>#</th>
            {/*<th>Image</th>*/}
            <th>Catgeories Name</th>
            <th>description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {catgeories.map((cat, i) => {
            return(
            <tr key={i}>
              <td>{cat.id}</td>
              <td>{cat.catName}</td>
              <td>{cat.discription}</td>
              <td>
                <Button className="btn btn-sm btn-danger">Delete</Button>
                <Link
                  to={"/UpdateCategory"}
                  className="btn btn-sm btn-primar mx-2"
                >
                  Update
                </Link>
                <Link to={`/viewcat/${cat.id}`} className="btn btn-sm btn-info">
                  View
                </Link>
              </td>
            </tr>)
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageCat;
