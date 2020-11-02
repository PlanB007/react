// import React, { Component} from "react"
//
// class InputTodo extends Component {
//   state = {
//     title: ""
//   };
//
//   onChange = (e) => {
//     this.setState({
//       //this works fine if you have one input field
//       //title: e.target.value
//
//       //this is if you have multiple input fields
//       [e.target.name]: e.target.value
//     })
//   }
//
//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.props.addTodoProps(this.state.title);
//     // this.setState({
//       title: ""
//     });
//   }
//
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit} className="form-container">
//         <input
//           type="text"
//           placeholder="add todo"
//           className="input-text"
//           value={this.state.title}
//           name="title" //if you have multiple input fields
//           onChange={this.onChange}
//         />
//         <input type="submit" className="input-submit" value="submit" />
//       </form>
//     )
//   }
// }
//
// export default InputTodo


// --------- new version with react hooks ------ //
import React, {useState} from "react"

const InputTodo = (props) => {

  const [inputText, setInputText] = useState({
    title: "",
  })

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodoProps(inputText.title)
    setInputText({
      title: "",
    })
  }

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={inputText.title}
        name="title"
        onChange={onChange}
      />
      <input type="submit" className="input-submit" value="Submit" />
    </form>
  )
}

export default InputTodo
