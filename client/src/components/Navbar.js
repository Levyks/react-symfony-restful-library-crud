import React from "react";
import { Link } from "react-router-dom";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


function NavbarComponent() {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="/">Library CRUD</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/library">Libraries</Nav.Link>
                        <Nav.Link as={Link} to="/book">Books</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default NavbarComponent;
/* 
<nav className="navbar navbar-expand navbar-dark bg-dark">
                <div className="container-fluid">
                    <a href="/" className="navbar-brand">
                        Library CRUD
                    </a>
                    <div className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to={"/library"} className="nav-link">
                                Libraries
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/book"} className="nav-link">
                                Books
                            </Link>
                        </li>
                    </div>
                </div>
            </nav>*/