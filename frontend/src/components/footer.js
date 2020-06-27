import React, { Component } from 'react';
import { render } from "react-dom";

class Footer extends Component {
    render () {
        return (
            <footer className="mt-4 mb-2 w-100 text-center">
                <h6>The Lab Rescue</h6>
                <p>See Dogs. Ask Questions. Be Educated.</p>
                <p>Some social media icons</p>
            </footer>
        )
    }
}

export default Footer;

const footer = document.getElementById("footer")
render(<Footer />, footer)