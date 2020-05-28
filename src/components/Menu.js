import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap'
import './Menu.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faHome, faShoppingBag, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

class Menu extends Component {
    render() {
        return (
            <Navbar bg="primary" expand="lg" variant="dark">
                <Navbar.Brand href="#home" className="NavbarBrand">Library </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home <FontAwesomeIcon icon={faHome} /></Nav.Link>
                        <Nav.Link href="#link">Cart <FontAwesomeIcon icon={faShoppingBag} /></Nav.Link>
                    </Nav>
                    <Nav className="mr-sm-2">
                        <Nav.Link href="#home">Login <FontAwesomeIcon icon={faSignInAlt} /></Nav.Link>
                        <Nav.Link href="#link">Register <FontAwesomeIcon icon={faSignOutAlt} /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
        );
    }
}

export default Menu;