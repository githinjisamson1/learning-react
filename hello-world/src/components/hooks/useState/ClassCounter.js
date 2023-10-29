import React, { Component } from 'react'

 class ClassCounter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count:0
    }
  }

  increment=()=>{
  this.setState((prevState)=>{
return {
  count: prevState.count + 1
}
  })
  }
    render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
      </div>
    )
  }
}

export default ClassCounter