import React from "react"

class InputTodo extends React.Component {

  state = {
    title: ""
  };

  onChange = e => {
    console.log("hello");
  };
  
  render() {
    return (
      <form>
        <input type="text" placeholder="Add todo..." value={this.state.title} onChange={this.onChange} />
        <button>Submit</button>
      </form>
    )
  }
}
export default InputTodo
