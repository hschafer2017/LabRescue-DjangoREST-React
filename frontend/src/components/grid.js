import React, { Component, useState } from 'react';
import { render } from "react-dom";
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
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
        const cols = [...Array(Math.ceil(this.state.breeds.length / 2))]
        const breedcols = cols.map((col, index) => this.state.breeds.slice(index * 2, index * 2 + 2));
        const content = breedcols.map((col, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} className="d-flex flex-column p-0">
                {col.map(breed =>
                    <div key={breed.id} className='m-2' style={{position: 'relative'}}>
                        <Image src={breed.image} className='img-fluid'/>
                        <div key={breed.id} className='image-title w-100 pt-3' style={{ position: 'absolute', bottom: '0'}}>
                            <h6 className='ml-3 mb-1 font-italic' style={{color: '#fafafa'}}>{breed.breed_name}</h6>
                            <p className='ml-3 font-weight-light' style={{color: '#fafafa', fontSize: '0.9em'}}>{breed.description}</p>
                        </div>
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