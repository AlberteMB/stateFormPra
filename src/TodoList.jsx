import { useState } from "react";

export default function TodoList() {
  const [todo, setTodo] = useState({
    task: "",
    done: false,
  });

  const [isAdded, setIsAdded] = useState(false);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setTodo((prevTodo) => ({
      ...prevTodo,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAdded(true);
  };

  return (
    <>
      <h3>Todo List</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="task">Task:</label>
          <input
            type="text"
            id="task"
            name="task"
            value={todo.task}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="done">Done:</label>
          <input
            type="checkbox"
            id="done"
            name="done"
            checked={todo.done}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add Task</button>
      </form>
      {isAdded && <p>Task added: {todo.task} ({todo.done ? "Done" : "Pending"})</p>}
    </>
  );
}

  

