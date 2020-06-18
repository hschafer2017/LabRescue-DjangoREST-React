import React, { Component } from 'react';
import { render } from "react-dom";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'


class QuestionAccordion extends Component {
    constructor(props) {
        super(props);
        this.state = {
          questions: [],
          loaded: false,
          placeholder: "Loading"
        };
      }
    
      componentDidMount() {
        fetch("api/question")
        .then(response => {
          if (response.status > 400) {
            return response;
          };
          return response.json();
          })
        .then(allQuestions => {
          this.setState({
            questions: allQuestions
          })
        });
      }

    render () {
        return (
            <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Click me!
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>Hello! I'm the body</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        Click me!
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>Hello! I'm another body</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        )
    };
};

export default QuestionAccordion;

const accordion = document.getElementById('accordion');
render(<QuestionAccordion />, accordion)