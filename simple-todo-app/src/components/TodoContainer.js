import React from "react"
import {v4 as uuidv4} from "uuid"

//import components
import TodosList from "./TodosList"
import Header from "./Header"
import InputTodo from "./InputTodo"

class TodoContainer extends React.Component {
  //object
  state = {
    //array with objects
    todos: [
      {
        //key : value
        id: uuidv4(),
        title: "Setup dev env",
        completed: true
      },
      {
        id: uuidv4(),
        title: "Dev website with content",
        completed: false
      },
      {
        id: uuidv4(),
        title: "Deploy to server",
        completed: false
      }
    ]
  };

//this is called a method
  handleChange= (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  }

  delTodo = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter(todo => {
          return todo.id !== id;
        })
      ]
    })
  }

  addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  }

  render() {
    return (
      <div>
        <Header />
        <InputTodo addTodoProps={this.addTodoItem}/>
        <TodosList
          todos={this.state.todos}
          handleChangeProps={this.handleChange}
          deleteTodoProps={this.delTodo}
        />
      </div>
    )
  }
}
export default TodoContainer
