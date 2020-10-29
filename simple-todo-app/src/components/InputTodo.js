import React, { Component} from "react"

class InputTodo extends Component {
  state = {
    title: ""
  };

  onChange = (e) => {
    this.setState({
      //this works fine if you have one input field
      //title: e.target.value

      //this is if you have multiple input fields
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodoProps(this.state.title);
    this.setState({
      title: ""
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="add todo"
          value={this.state.title}
          name="title" //if you have multiple input fields
          onChange={this.onChange}
        />
        <input type="submit" value="submit" />
      </form>
    )
  }
}

export default InputTodo
