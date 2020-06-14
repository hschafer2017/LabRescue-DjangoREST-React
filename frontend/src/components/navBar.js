import React, { Component } from 'react';
import { render } from "react-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import regeneratorRuntime from "regenerator-runtime";

let loginButton;

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            loaded: false,
            placeholder: "Loading"
        };
    };
    componentDidMount() {
        fetch("rest-auth/user")
        .then(response => {
            if (response.status > 400) {
                return response;
            };
            return response.json();
        })
        .then(users => {
            if (users.username !== undefined) {
                loginButton = <Nav.Link href="accounts/logout">Logout, {users.username}</Nav.Link>;
            } else {
                loginButton = <Nav.Link href="accounts/login">Login</Nav.Link>;
            };
            this.setState(() => {
                return {
                    users,
                    loaded: true
                };
            });
        });
    };

    render () {
        return (
            <Navbar bg='light' variant='light' expand='lg'>
                <Navbar.Brand href="/">Lab Rescue</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#">Dogs</Nav.Link>
                        <Nav.Link href="#">Breeds</Nav.Link>
                        <Nav.Link href="#">FAQs</Nav.Link>
                        {loginButton}
                    </Nav>
                </Navbar.Collapse>
          </Navbar>
        )
    };
};

export default NavBar;

const navbar = document.getElementById("navbar")
render(<NavBar />, navbar)