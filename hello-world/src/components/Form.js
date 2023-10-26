import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    // maintaing form state
    this.state = {
      name: "",
      comments: "",
      fruit: "apple",
    };
  }

  //   eventHandlers
  handleInputChange = (e) => {
    this.setState({ name: e.target.value }, console.log(this.state.name));
  };

  handleSelectChange = (e) => {
    this.setState({ fruit: e.target.value });
  };

  handleTextareaChange = (e) => {
    this.setState({ comments: e.target.value });
  };

  handleSubmission = (e) => {
    // prevent default refresh behavior
    e.preventDefault();
    console.log(e.target);
    alert(`${this.state.name} ${this.state.comments} ${this.state.fruit}`);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmission}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </div>

        <div>
          <label htmlFor="fruits">Fruit: </label>
          <select
            name="fruits"
            id="fruits"
            value={this.state.fruit}
            onChange={this.handleSelectChange}
          >
            <option value="apple">Apple</option>
            <option value="banana">Banana</option>
            <option value="cherry">Cherry</option>
          </select>
        </div>

        <div>
          <textarea
            name="comments"
            id="comments"
            cols="30"
            rows="10"
            value={this.state.comments}
            onChange={this.handleTextareaChange}
          ></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;

// rconst/this.state={}/maintain state
// value={this.state.name}
// onChange={this.handleInputChange}
// handleInputChange = (e) => {this.setState({name:e.target.value})}

// can apply onClick on btnSubmit instead of onSubmit on form
