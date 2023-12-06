import React from "react";
import AddTodo from "./components/TodoForm";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters";

export default function TodoApp() {
  return (
    <main>
      <h1
        style={{
          marginBottom: "10px",
          fontSize: "25px",
        }}
      >
        Keep track of your todos
      </h1>
      <AddTodo />
      <VisibilityFilters />
      <TodoList />
    </main>
  );
}
