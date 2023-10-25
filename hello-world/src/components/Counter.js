import React, { Component } from "react";

class Counter extends Component {
  // must invoke super/rconst
  constructor(props) {
    super(props);

    // maintain state
    this.state = {
      count: 0,
    };
  }

  increment() {
    // change state/triggers re-render
    // without setState() no change takes effect
    // calls to setState are async/pass callback as 2nd arg

    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log(`Updated value: ${this.state.count}`);
    //   }
    // );

    // TODO: avoid changing current state/updating state based on previous state value
    this.setState(
      (prevState) => {
        // can pass props as 2nd param/(prevState, props)
        // return newState
        return {
          count: prevState.count + 1,
        };
      },
      () => {
        console.log("Updated value: ", this.state.count);
      }
    );

    // will be executed first
    console.log(this.state.count);
  }

  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <div>
        {/* access count using this */}
        <h1>Count - {this.state.count}</h1>

        {/* handleClick/avoid invoking immediately */}
        <button
          onClick={() => {
            this.incrementFive();
          }}
        >
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;

// TODO:
// never modify state directly
// always use setState()
// calls to setState are asynchronous/pass callback as 2nd arg
// whenever you want to execute some functionality after changing state
// do so in the callback function i.e., 2nd arg
// whenever updating state based on previous state
// always pass in function as arg instead of regular object/has access to previous state
