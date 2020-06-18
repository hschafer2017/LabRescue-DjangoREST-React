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
                {this.state.questions.map((question, index) => {
                    return (
                        <Card key={index}>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey={index}>
                                {question.title}
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey={index}>
                            <Card.Body>{question.content}</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    )
                })}
            </Accordion>
        )
    };
};

export default QuestionAccordion;

const accordion = document.getElementById('accordion');
render(<QuestionAccordion />, accordion)