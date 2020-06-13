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
                loginButton = <Nav.Link href="accounts/login">Login</Nav.Link>;
                return loginButton;
            }
            loginButton = <Nav.Link href="accounts/logout">Logout</Nav.Link>;
            return response.json();
          })
          .then(users => {
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
            <Navbar bg='light' variant='light'>
                <Navbar.Brand href="#home">Lab Rescue</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        {this.state.users.username}
                    </Navbar.Text>
                    <Nav className="mr-auto">
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