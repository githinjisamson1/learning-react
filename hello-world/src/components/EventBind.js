import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      message: "Changed message",
    });

    // undefined
    // console.log(this);
  }

  handleClick2 = () => {
    this.setState({
      message: "Changed message 2",
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* TODO: method 1  */}
        {/* <button onClick={this.handleClick.bind(this)}>Click</button> */}

        {/* TODO: method 2 */}
        {/* <button
          onClick={() => {
            this.handleClick();
          }}
        >
          Click
        </button> */}

        {/* TODO: method 3 */}
        <button onClick={this.handleClick}>Click</button>

        {/* TODO: method 4 */}
        <button onClick={this.handleClick2}>Click 2</button>
      </div>
    );
  }
}

export default EventBind;

// TODO: binding eventHandlers

// at onClick --- has performance implications
// 1. this.clickHandler.bind(this)  //attach this

// in render method --- easiest/if no re-rendering
// 2. () => {this.handleClick()}    //arrow function/refers to parent scope

// in constructor/recommended/happens once
// 3. this.handleClick = this.handleClick.bind(this) +  this.handleClick

// in class as method using arrow function syntax/recommended
// 4. handleClick2=()=>{this.setState({message:"Changed message 2"})} + this.handleClick2
