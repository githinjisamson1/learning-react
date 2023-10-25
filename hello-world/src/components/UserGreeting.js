import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    // TODO: method 1
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome, John</div>;
    // } else {
    //   return <div>Welcome, guest</div>;
    // }

    // TODO: method 2
    // let message;

    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome, Doe</div>;
    // } else {
    //   message = <div>Welcome, Guest</div>;
    // }

    // return message;

    // TODO: method 3
    // return (
    //   <>
    //     {this.state.isLoggedIn ? (
    //       <div>Welcome, John</div>
    //     ) : (
    //       <div>Welcome, Guest</div>
    //     )}
    //   </>
    // );

    // TODO: method 4
    return (
      <>
        {this.state.isLoggedIn && <div>Welcome, John</div>}
      </>
    );
  }
}

export default UserGreeting;

// TODO: CONDITIONAL RENDERING
// 1. if...else
// if...else statements don't work inside jsx
// because jsx is just syntactic sugar only for function calls and object construction

// 2. element variables
// let message, message = <div>Welcome, Doe</div>, return message
// message stores element to be rendered

// 3. ternary operator
//his.state.isLoggedIn? <div>Welcome, John</div> : <div>Welcome, Guest</div>

// 4. short circuit
// this.state.isLoggedIn && <div>Welcome, John</div>;
