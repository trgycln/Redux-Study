import React from "react";
import AddTodo from "./components/AddTodo";
import TodoContainer from "./components/todoContainer";

function App() {
  return (
    <div>
      <h1>Todo App</h1>
      <AddTodo/>
      <TodoContainer/>
    </div>
  );
}

export default App;
