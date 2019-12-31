import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faMediumM
} from "@fortawesome/free-brands-svg-icons";

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      icons: [faLinkedinIn, faGithub, faMediumM],
      links: {
        github: "https://github.com/codecalec",
        "linkedin-in": "https://www.linkedin.com/in/alex-veltman-701aa2190"
      },
      color: "blue"
    };
  }

  attachLink(name) {
    window.location = this.state.links[name];
  }

  render() {
    return (
      <div className="section footer">
        <div className="container">
          <div className="row">
            {this.state.icons.map(icon => (
              <div className="one-third column">
                <FontAwesomeIcon
                  className="nav footer"
                  icon={icon}
                  size="xl"
                  onClick={() => this.attachLink(icon.iconName)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
