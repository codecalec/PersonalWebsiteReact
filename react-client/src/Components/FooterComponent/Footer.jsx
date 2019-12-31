import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faMediumM
} from "@fortawesome/free-brands-svg-icons";

class Footer extends Component {
  render() {
    return (
      <div className="section footer">
        <div className="container">
          <div className="row">
            <div className="one-third column">
              <FontAwesomeIcon icon={faGithub} />
            </div>
            <div className="one-third column">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </div>
            <div className="one-third column">
              <FontAwesomeIcon icon={faMediumM} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
