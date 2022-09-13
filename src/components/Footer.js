import React, { useState, useContext } from "react";
import { DataContext } from "./DataProvider";

export default function Footer() {
  const [checkedAll, setCheckedAll] = useState(false);
  const [todos, setTodos] = useContext(DataContext);

  const handleCheckedAll = () => {
    const newTodos = [...todos];
    newTodos.forEach((todo) => {
      todo.complete = !checkedAll;
    });
    setTodos(newTodos);
    setCheckedAll(!checkedAll);
  };

  const deleteTodo = () => {
    const newTodos = todos.filter((todo) => {
      return todo.complete === false;
    });
    setTodos(newTodos);
    setCheckedAll(false);
  };

  return (
    <div className="row">
      <label htmlFor="all">
        <input
          type="checkbox"
          name="all"
          id="all"
          onClick={handleCheckedAll}
          checked={checkedAll}
        />
        ALL
      </label>
      <button id="delete" onClick={deleteTodo}>
        Delete
      </button>
    </div>
  );
}
