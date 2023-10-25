import React, { Component } from "react";

export default class Message extends Component {
  // must invoke super
  constructor() {
    super();

    // maintain state
    this.state = {
      message: "Welcome visitor",
    };
  }

  //   handleClick
  changeMessage() {
    // alter state of class component
    this.setState({
      message: "Thank you for subscribing",
    });
  }
  render() {
    return (
      <div>
        {/* access props using this */}
        <h1>{this.state.message}</h1>

        {/* handleClick/avoid invoking immediately */}
        <button
          onClick={() => {
            this.changeMessage();
          }}
        >
          Subscribe
        </button>
      </div>
    );
  }
}
