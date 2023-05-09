import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./css/Medscard.css";
import { Link } from "react-router-dom";
import { images } from "./images";
// import Cardlist from './Cardlist'

const Medscard = (props) => {
  // const { id, link, name } = props;
  return (
    <div className="dib br3 pa3 ma2 grow" >
      <Card>
        <Card.Img className="card-image"  src={props.link} />
        <Card.Body>
          {/* <Card.Title>{props.name}</Card.Title> */}
          <h3>{props.name}</h3>
          <Card.Text>{props.description}</Card.Text>
          <Link className="btn btn-dark w-100" to={"./Medsdetails"}>
            Show More
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Medscard;
