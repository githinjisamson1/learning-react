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
import NameList from "./components/NameList";
import PersonList from "./components/PersonList";
import StyleSheet from "./components/StyleSheet";
import Inline from "./components/Inline";
import "./components/appStyles.css";
import styles from "./components/appStyles.module.css";
import Form from "./components/Form";
import LifeCycleA from "./LifeCycleA";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
import PureComp from "./components/PureComp";
import ParentComp from "./components/ParentComp";
import ClassCounter from "./components/hooks/useState/ClassCounter";
import FunctionCounter from "./components/hooks/useState/FunctionCounter";
import ObjectState from "./components/hooks/useState/ObjectState";
import ArrayState from "./components/hooks/useState/ArrayState";

export default class App extends Component {
  render() {
    return (
      <div>
        {/* TODO: ===== BASICS OF REACT =====*/}
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

        {/* <UserGreeting/> */}
        {/* <NameList /> */}

        {/* <PersonList /> */}

        {/* <StyleSheet primary={true}/> */}
        {/* <Inline /> */}
        {/* <h1 className="error">Error</h1>
        <h1 className={styles.success}>Success</h1> */}

        {/* <Form/> */}

        {/* <LifeCycleA /> */}

        {/* <FragmentDemo /> */}
        {/* <Table /> */}

        {/* <ParentComp /> */}

        {/* TODO: ===== HOOKS ===== */}

        {/* ===== useState ===== */}
        {/* <ClassCounter/> */}
        {/* <FunctionCounter /> */}
        {/* <ObjectState/> */}
        {/* <ArrayState /> */}

        {/* ===== useEffect ===== */}
      </div>
    );
  }
}
