import React from "react"
import {v4 as uuidv4} from "uuid"
import axios from "axios"

//import components
import TodosList from "./TodosList"
import Header from "./Header"
import InputTodo from "./InputTodo"


class TodoContainer extends React.Component {
  //object
  state = {
    //array with objects
    todos: [],
    show: false,
  };

//this is called a method
  handleChange= (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed;
        }
        return todo;
      }),
      show: !this.state.show,
    });
  }

  delTodo = (id) => {
    axios
    .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(response =>
      this.setState({
        todos: [
          ...this.state.todos.filter(todo => {
            return todo.id !== id
          }),
        ],
      })
    )
  }

  addTodoItem = title => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title: title,
        completed: false,
      })
      .then(response =>
        this.setState({
          todos: [...this.state.todos, response.data],
        })
      )
  }

  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(response => this.setState({todos: response.data}));
  }





  render() {
    return (
      <div className="container">
        <Header headerSpan={this.state.show} />
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
