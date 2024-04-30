import React, { useState } from "react";

const TodoList = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const addTodo = (todoText) => {
    const newTodo = { id: list.length + 1, todo: todoText };
    setList([...list, newTodo]);
    setInput("");
  };

  const deleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);

    setList(newList);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        className="input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="add" onClick={() => addTodo(input)}>
        Add
      </button>
      <div className="todos">
        <ul>
          {list.map((todo) => (
            <li key={todo.id}>
              {todo.todo}
              <button className="delete" onClick={() => deleteTodo(todo.id)}>&times;</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
