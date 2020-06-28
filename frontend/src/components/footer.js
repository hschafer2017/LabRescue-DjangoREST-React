import React, { Component } from 'react';
import { render } from "react-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons'

class Footer extends Component {
    render () {
        return (
            <footer className="mt-4 w-100 text-center pt-3">
                <h5 className="font-weight-bold">The Lab Rescue</h5>
                <p>See Dogs. Ask Questions. Be Educated.</p>
                <Row>
                    <Col xs={{ span: 12}} sm={{span: 10, offset: 2}} md={{ span: 6, offset: 3 }} lg={{span:4, offset: 4}}>
                    <span className="fa-layers fa-2x mx-3">
                        <FontAwesomeIcon icon={faCircle} size="lg" style={{color: '#5C5E60'}} />
                        <FontAwesomeIcon style={{color: '#fafafa'}}  icon={faFacebookF} className="mx-2" />
                    </span>
                    <span className="fa-layers fa-2x mx-3">
                        <FontAwesomeIcon icon={faCircle} size='lg' style={{color: '#5C5E60'}} />
                        <FontAwesomeIcon style={{color: '#fafafa'}} size='sm' icon={faInstagram} className="mx-2"/>
                    </span>
                    <span className="fa-layers fa-2x mx-3">
                        <FontAwesomeIcon icon={faCircle} size='lg' style={{color: '#5C5E60'}} />
                        <FontAwesomeIcon style={{color: '#fafafa'}} size='sm' icon={faTwitter} className="mx-2"/>
                    </span>
                    <span className="fa-layers fa-2x mx-3">
                        <FontAwesomeIcon icon={faCircle} size='lg' style={{color: '#5C5E60'}} />
                        <FontAwesomeIcon style={{color: '#fafafa'}} size='sm' icon={faEnvelope} className="mx-2"/>
                    </span>
                    </Col>
                </Row>
            </footer>
        )
    }
}

export default Footer;

const footer = document.getElementById("footer")
render(<Footer />, footer)