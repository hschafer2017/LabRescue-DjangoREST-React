import React, { Component } from 'react';
import { render } from "react-dom";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

var navBarHeight = document.getElementById('navbar').offsetHeight;

const styles = {
    backgroundImage: 'url(https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: (window.innerHeight - navBarHeight),
    resizeMode: 'contain',
    flex: 1,
    color: '#5C5E60',
}
class HomeJumbotron extends Component {

    render () {
        return (
            <Jumbotron fluid style={styles}>
            <Container>
                <h1 style={{fontWeight: '700'}}>The Lab Rescue</h1>
                <p style={{fontWeight: '500'}}>
                See Dogs. Ask Questions. Get Educated.
                </p>
            </Container>
            </Jumbotron>
        )
    };
};

export default HomeJumbotron;

const homeJumbotron = document.getElementById("jumbotron")
render(<HomeJumbotron />, homeJumbotron)