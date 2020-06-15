import React, { Component } from "react";
import { render } from "react-dom";
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Container from 'react-bootstrap/Container';

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
        <h1>Dogs</h1>
        <CardColumns>
          {this.state.dogs.map(dog => {
            return (
              <Card key={dog.id}>
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
            );
          })}
        </CardColumns>
      </Container>
    )
  }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);