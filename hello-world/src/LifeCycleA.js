import React, { Component } from "react";
import LifeCycleB from "./components/LifeCycleB";

class LifeCycleA extends Component {
  // mutate state/bind eventHandlers
  constructor(props) {
    super(props);

    this.state = {
      name: "John",
    };

    this.handleClick = this.handleClick.bind(this);
    console.log("1. LifeCycleA constructor");
  }

  // returns newState
  static getDerivedStateFromProps(props, state) {
    console.log("2. LifeCycleA getDerivedStateFromProps");
    return null;
  }

  //   after rendering to browser
  componentDidMount() {
    console.log("4. LifeCycleA componentDidMount");
  }

  shouldComponentUpdate(prevProps, prevState) {
    console.log("LifeCycleA shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCycleA getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LifeCycleA componentDidUpdate");
  }

  handleClick() {
    this.setState({
      name: "Doe",
    });
  }

  //   renders to browser
  render() {
    console.log("3. LifeCycleA render");
    return (
      <>
        <div>{this.state.name}</div>
        <div>LifeCycleA</div>
        <LifeCycleB />
        <button onClick={this.handleClick}>Change State</button>
      </>
    );
  }
}

export default LifeCycleA;

// TODO: MOUNTING PHASE
// 1. constructor
// 2. static getDeriedStateFromProps
// 3. render
// 4. componentDidMount

// mounting phase is similar to useEffect hook
// look at order of execution when having children i.e., <LifeCycleB />

// TODO: UPDATING PHASE
// 1. static getDerivedStateFromProps/x
// 2. shouldComponentUpdate/x
// 3. render/MUST USE
// 4. getSnapshotBeforeUpdate
// 5. componentDidUpdate/MUST USE

// render/componenetDidUpdate ....MUST

// TODO: UNMOUNTING PHASE
// 1. componentWillUnmount

// TODO: ERROR HANDLINH PHASE
// 1. static getDerivevdStateFromError
// 2. componentDidCatch
