import React, { Component } from "react";

export default class Welcome extends Component {
  render() {
    const { name, gender } = this.props;
    // const { state1, state2 } = this.state;
    return (
      <div>
        Welcome, {name}! {gender}
      </div>
    );
  }
}

// TODO: class component
// render method
// render returns html/jsx
