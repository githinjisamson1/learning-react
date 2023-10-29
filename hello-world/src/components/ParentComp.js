import React, { Component } from "react";
import RegComp from "./RegComp";
import PureComp from "./PureComp";

export class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "John",
    };
  }

  componentDidMount() {
    // setInterval(() => {
    //   this.setState({
    //     name: "John",
    //   });
    // }, 5000);
  }

  render() {
    console.log("Parent component");
    return (
      <React.Fragment>
        ParentComp
        <RegComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </React.Fragment>
    );
  }
}

export default ParentComp;
