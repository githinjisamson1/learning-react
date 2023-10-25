import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "parent",
    };

    // since this is used inside innerFunction
    this.greetParent = this.greetParent.bind(this);
  }

  greetParent(childName) {
    alert(`Hello ${this.state.parentName} from ${childName}`);
  }

  render() {
    return (
      <div>
        {/* passing function as reference */}
        {/* passing props from parent to child */}
        <ChildComponent greetParent={this.greetParent} />
      </div>
    );
  }
}

export default ParentComponent;
