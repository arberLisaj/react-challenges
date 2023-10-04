import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

const App = () => {
  const [todos, setTodos] = useState(() =>
    JSON.parse(localStorage.getItem("todos"))
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const inputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      text: inputRef.current.value,
    };
    setTodos((currentTodos) => [newTodo, ...currentTodos]);
    inputRef.current.value = "";
  };

  const handleDeleteTodo = (id) => {
    setTodos((currentTodos) => currentTodos.filter((t) => t.id !== id));
  };

  return (
    <main>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          name="input"
          type="text"
          ref={inputRef}
          autoFocus
          required
          placeholder="Add todo..."
        />
        <button type="submit">Create</button>
      </form>

      {!todos.length == 0 ? (
        <ul>
          {todos.map((t) => (
            <li key={t.id}>
              <p>{t.text}</p>
              <button onClick={() => handleDeleteTodo(t.id)}>delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="addtodo">Add your first todo.</p>
      )}
    </main>
  );
};

export default App;
