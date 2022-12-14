import { v4 as uuidv4 } from "uuid";
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import NotMatch from "../pages/NotMatch"
import Navbar from "./Navbar"


const TodoContainer = () => {
  const [todos, setTodos] = useState(getInitialTodos());

  useEffect(() => {
    // getting stored items
    const temp = localStorage.getItem("todos")
    const loadedTodos = JSON.parse(temp)

    if (loadedTodos) {
      setTodos(loadedTodos)
    }
  }, []);

  useEffect(() => {
    // storing todos items
    const temp = JSON.stringify(todos)
    localStorage.setItem("todos", temp)
  }, [todos]);

  function getInitialTodos() {
    // getting stored items
    const temp = localStorage.getItem("todos")
    const savedTodos = JSON.parse(temp)
    return savedTodos || []
  }

  const handleChange = (id) => {
    setTodos((prevState) => prevState.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        }
      }
      return todo
    })
    )
  }

  const delTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => todo.id !== id),
    ]);
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    };

    setTodos([...todos, newTodo]);
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.title = updatedTitle
      }
      return todo
    })
    )
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" component ={Home} element={<Home addTodoProps={addTodoItem} todos={todos} handleChangeProps={handleChange} deleteTodoProps={delTodo} setUpdate={setUpdate} />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </>
  );
}
export default TodoContainer
