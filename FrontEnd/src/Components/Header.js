import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";


const Header = () => {
	const Logout = () => {

	};

	return(
		<div>
		<Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
          <Link className="nav-link" to={'/'}>Meds App</Link> 
          </Navbar.Brand>
          <Nav className="me-auto">
            {/*<Link className="nav-link" to={'/'}>List Meds</Link>*/}
            <Link className="nav-link" to={'/Login'}>Login</Link>
            <Link className="nav-link" to={'/Register'}>Register</Link>
            <Link className="nav-link"to={'/Managemeds'}>Manage Meds</Link>
            <Link className="nav-link"to={'/Managepatients'}>Manage Patients</Link>
            <Link className='nav-link' to={'/managecat'}>Manage Categories</Link>
          </Nav>
          <Nav className="ms-auto">
          	{/*<Nav.Link onClick={Logout}>Logout</Nav.Link>*/}
          <Link className="nav-link" to={'/Login'}>Logout</Link>

          </Nav>
        </Container>
      </Navbar>
		</div>
		);
};

export default Header;