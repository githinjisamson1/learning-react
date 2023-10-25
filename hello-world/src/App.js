import React, { Component } from "react";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Greet name="John" gender="male">
          <p>This is children</p>
        </Greet> */}
        {/* <Greet name="Jane" gender="female" /> */}
        {/* <Welcome name="Peter" gender="male" /> */}
        {/* <Welcome name="Maya" gender="female" /> */}
        {/* <Hello /> */}
        {/* <Message /> */}
        {/* <Counter/> */}
        {/* <FunctionClick /> */}
        {/* <ClassClick /> */}
        {/* <EventBind /> */}
        {/* <ParentComponent /> */}
        <UserGreeting/>
      </div>
    );
  }
}
