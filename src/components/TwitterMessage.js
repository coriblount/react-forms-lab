import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleChange = event => {
    this.setState(
      {
        message: event.target.value
      }
    )
  }

  render() {
    let CharsNumber = this.props.maxChars - this.state.length
    return (  
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleChange} value={this.state.message} />
        {CharsNumber}
      </div>
    );
  }
}

export default TwitterMessage;
