import React, { Component } from 'react';
import { render } from "react-dom";
import Navbar from 'react-bootstrap/Navbar';
import regeneratorRuntime from "regenerator-runtime";


class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            loaded: false,
            placeholder: "Loading"
        };
        }
      componentDidMount() {
        fetch("rest-auth/user")
        .then(response => {
            if (response.status > 400) {
                response = { username: "Login Here!" }
                return response;
            }
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
      }
    render () {
        return (
            <Navbar bg='light' variant='light'>
                <Navbar.Brand href="#home">Lab Rescue</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        {this.state.users.username}
                    </Navbar.Text>
                </Navbar.Collapse>
          </Navbar>
        )
    }
}

export default NavBar;

const navbar = document.getElementById("navbar")
render(<NavBar />, navbar)