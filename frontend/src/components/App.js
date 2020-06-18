import React, { Component } from "react";
import { render } from "react-dom";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: [],
      loaded: false,
      placeholder: "Loading"
    };
  }

  componentDidMount() {
    fetch("api/dog")
    .then(response => {
      if (response.status > 400) {
        return response;
      };
      return response.json();
      })
    .then(allDogs => {
      this.setState({
        dogs: allDogs
      })
    });
  }

  render() {
    return (
      <Container>
        <h1 className='mb-2'>Dogs</h1>
        <CardDeck className="d-inline-block" style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Row className="align-content-center align-items-center flex-wrap justify-content-center">
          {this.state.dogs.map((dog, index) => {
            return (
              <Col key={index} xs={12} sm={6} md={6} lg={4}>
              <Card key={index} className="mx-auto d-block mb-3 mt-3" style={{width: '18em', flex: 1}}>
                <Card.Img variant="top" src={dog.image} />
                <Card.Body>
                  <Card.Title>{dog.name} - {dog.breed}</Card.Title>
                  <Card.Text>
                    {dog.description}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Uploaded on: {dog.uploaded_date}</small>
                </Card.Footer>
              </Card>
            </Col>
            );
          })}
          </Row>
        </CardDeck>
      </Container>
    )
  }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);