import React, { Component, useState } from 'react';
import { render } from "react-dom";
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
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
            <Container fluid className="p-0 h-100">
                <Row className="d-flex flex-wrap w-100 m-0">
                    {this.state.breeds.map((breed, index) => {
                        return (
                        <Col key={index} xs={12} sm={6} md={4} lg={4} className="px-1 h-100">
                            <Image style={{position: 'relative'}} src={breed.image} className='w-100 mt-3'/>
                            <h6 style={{position: 'absolute', bottom: '0.5em', left: '1em'}}>{breed.breed_name}</h6>
                        </Col>
                        )
                    })}
                </Row>
            </Container>
        )
    };
};

export default PhotoGrid;

const photoGrid = document.getElementById('grid');
render(<PhotoGrid/>, photoGrid);