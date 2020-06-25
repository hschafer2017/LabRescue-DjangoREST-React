import React, { Component } from 'react';
import { render } from "react-dom";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const questionStyles = {
    backgroundColor: '#FAFAFA',
    color: '#5C5E60',
    fontWeight: '500',
}

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
            <Container style={questionStyles}>
                <h2 className="my-4">Ask Questions.</h2>
                <Accordion defaultActiveKey="0">
                    {this.state.questions.map((question, index) => {
                        return (
                            <Card key={index} style={{border: 'none', backgroundColor: '#fafafa'}}>
                            <Card.Header style={{backgroundColor: '#fafafa', borderBottom: 'none'}}>
                                <Row className="flex-wrap">
                                    <Col xs={12} sm={12} md={12} lg={12} className="justify-content-center">
                                        <p>{question.title}
                                            <Accordion.Toggle as={Button} variant="link" eventKey={index}>
                                            <FontAwesomeIcon style={{color: '#5C5E60'}} icon={faPlus} />
                                            </Accordion.Toggle>
                                        </p>
                                    </Col>
                                </Row>
                            </Card.Header>
                            <Accordion.Collapse eventKey={index}>
                                <Card.Body style={{backgroundColor: '#fafafa', borderBottom: 'none'}}>
                                    <Container>
                                        <Row className="flex-wrap">
                                            <Col xs={8} sm={8} md={8} lg={8} className="justify-content-center my-2">
                                                <p className='float-left font-italic font-weight-light'>{question.author} &mdash;</p>
                                            </Col>
                                            <Col xs={4} sm={4} md={4} lg={4} className="justify-content-center my-2">
                                                <p className='float-right font-italic font-weight-light'>{question.date}</p>
                                            </Col>
                                        </Row>
                                        <p className="mb-3">{question.content}</p>
                                        <Accordion defaultActiveKey="0">
                                            <Card key={index} style={{border: 'none', backgroundColor: '#fafafa'}}>
                                                <Card.Header style={{backgroundColor: '#fafafa', borderBottom: 'none'}}>
                                                    <Row className="flex-wrap">
                                                        <Col xs={12} sm={12} md={12} lg={12} className="justify-content-center">
                                                            <p>Answers
                                                                <Accordion.Toggle as={Button} variant="link" eventKey={index}>
                                                                <FontAwesomeIcon style={{color: '#5C5E60'}} icon={faPlus} />
                                                                </Accordion.Toggle>
                                                            </p>
                                                        </Col>
                                                    </Row>
                                                </Card.Header>
                                                <Accordion.Collapse eventKey={index}>
                                                    <Card.Body style={{backgroundColor: '#fafafa', borderBottom: 'none'}}>
                                                        <Container>
                                                            {question.answers.map((answer, index) => {
                                                                return (
                                                                    <Row className="flex-wrap">
                                                                        <span key={index}>
                                                                            <p>{answer.content}</p>
                                                                            <p className='float-right font-italic font-weight-light'>&mdash; {answer.author} on {answer.date}</p>
                                                                        </span>
                                                                    </Row>
                                                                )
                                                            })}
                                                        </Container>
                                                    </Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                        </Accordion>
                                    </Container>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        )
                    })}
                </Accordion>
            </Container>
        )
    };
};

export default QuestionAccordion;

const accordion = document.getElementById('accordion');
render(<QuestionAccordion />, accordion)