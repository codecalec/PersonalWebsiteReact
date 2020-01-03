import React, { Component } from "react";

import ReactMarkdown from "react-markdown";
import source from "mdsource";

class ResumePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  componentDidMount() {
    fetch(source)
      .then(response => {
        return response.text();
      })
      .then(text =>
        this.setState({
          text: text
        })
      )
      .catch(err => console.error(err));
  }

  render() {
    console.log(this.state.text)
    return (
      <div className="section content" style={{ marginTop: "5%" }}>
        <div className="container resume">
          <ReactMarkdown source={this.state.text} />
        </div>
      </div>
    );
  }
}

export default ResumePage;
