import React, { useState, useContext, useEffect, useRef } from "react";
import { DataContext } from "./DataProvider";

const Input = () => {
  const [todos, setTodos] = useContext(DataContext);
  const [todoName, setTodoName] = useState("");
  const todoInput = useRef();

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, { name: todoName, complete: false }]);
    setTodoName("");
    todoInput.current.focus();
  };

  useEffect(() => {
    todoInput.current.focus();
  }, []);
  return (
    <form onSubmit={addTodo}>
      <input
        type="text"
        name="lists"
        id="todos"
        ref={todoInput}
        placeholder="무엇을 할까요?"
        value={todoName}
        onChange={(e) => setTodoName(e.target.value.toLocaleLowerCase())}
      />
      <input type="date" />
      <button className="addButton" type="submit">
        Create
      </button>
    </form>
  );
};

export default Input;
