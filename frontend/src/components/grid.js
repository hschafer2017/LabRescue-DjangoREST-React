import React, { Component, useState } from 'react';
import { render } from "react-dom";
import Figure from 'react-bootstrap/Figure';
import FigureImage from 'react-bootstrap/FigureImage';
import FigureCaption from 'react-bootstrap/FigureCaption';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


class PhotoGrid extends Component {

    constructor(props) {
        super(props);
        this.state = {
            breeds: [],
            loaded: false,
            placeholder: 'Loading',
        };
    }

    componentDidMount() {
        fetch('api/breed')
        .then(response => {
            if (response.status > 400) {
                return response;
            };
            return response.json();
        })
        .then(breed => {
            this.setState({
                breeds: breed,
            })
        });
    };

    render () {
        return(
            <Container fluid>
            {this.state.breeds.map((breed, index) => {
                return (
                <div key={index}>
                    <p>{breed.breed_name}</p>
                    <p>{breed.description}</p>
                </div>
                )
            })}
            </Container>
        )
    };
};

export default PhotoGrid;

const photoGrid = document.getElementById('grid');
render(<PhotoGrid/>, photoGrid);