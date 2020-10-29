import React from "react"

//import components
import TodosList from "./TodosList"
import Header from "./Header"

class TodoContainer extends React.Component {
  //object
  state = {
    //array with objects
    todos: [

      {
        //key : value
        id: 1,
        title: "Setup dev env",
        completed: true
      },
      {
        id: 2,
        title: "Dev website with content",
        completed: false
      },
      {
        id: 3,
        title: "Deploy to server",
        completed: false
      }
    ]
  };

  render() {
    return (
      <div>
        <Header />
        <TodosList todos={this.state.todos} />
      </div>
    )
  }
}
export default TodoContainer
