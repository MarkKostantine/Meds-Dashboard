import React, { Component } from "react";
// import Medscard from './Components/Medscard';
import Medscard from "./Medscard";
import Form from "react-bootstrap/Form";
import Cardlist from "./Cardlist";
import { images } from "./images";
import SearchBox from "./SearchBox";
// import Dropdown from "./Dropdown"
// import Footer from './Footer';
import "../Components/css/home.css"
class Home extends Component {
  constructor() {
    super();
    this.state = {
      images: images,
      searchfield: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };
  render() {
    const filteredImages = this.state.images.filter((images) => {
      return images.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <div className="home-container m-2 px-4">
        <Form>
          <Form.Group className="mb-3 px-4 ">
            {/* <Form.Control type="text" placeholder="Search Meds" />
             <button className='btn btn-dark'>Search</button>*/}
            <SearchBox searchChange={this.onSearchChange} />
          </Form.Group>
        </Form>
        <div className="">
          <div className="">
            <Cardlist className="" images={filteredImages} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
