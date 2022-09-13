import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import TodoContainer from "./components/TodoContainer"
import "./app.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TodoContainer />
    </BrowserRouter>
  </React.StrictMode>,
);
