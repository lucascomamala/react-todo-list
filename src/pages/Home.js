import React from "react"
import TodosList from "../components/TodosList";
import Header from "../components/Header"
import InputTodo from "../components/InputTodo"

const Home = (props) => {
  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo addTodoProps={props.addTodoItem} />
        <TodosList
          todos={props.todos}
          handleChangeProps={props.handleChange}
          deleteTodoProps={props.delTodo}
          setUpdate={props.setUpdate}
        />
      </div>
    </div>
  )
}
export default Home
