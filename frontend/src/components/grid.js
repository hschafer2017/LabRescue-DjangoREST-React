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
import Collapse from '../../node_modules/react-bootstrap/Collapse';


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
        const cols = [...Array(Math.ceil(this.state.breeds.length / 2))]
        const breedcols = cols.map((col, index) => this.state.breeds.slice(index * 2, index * 2 + 2));
        console.log(breedcols);
        const content = breedcols.map((col, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} className="d-flex flex-column p-0">
                {col.map(breed =>
                    <div key={breed.id} className='m-2' style={{position: 'relative'}}>
                        <Image src={breed.image} className='img-fluid'/> 
                        <h6 style={{position: 'absolute', bottom: '0.5em', left: '1em'}}>{breed.breed_name}</h6>
                    </div>
                )}
            </Col>
        ))
        return(
            <Container fluid className="p-0 h-100">
                <Row className="d-flex flex-row flex-wrap justify-content-center m-0">
                    {content}
                </Row>
            </Container>
        )
    };
};

export default PhotoGrid;

const photoGrid = document.getElementById('grid');
render(<PhotoGrid/>, photoGrid);