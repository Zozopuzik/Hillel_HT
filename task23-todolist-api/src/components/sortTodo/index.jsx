import React, { useState } from "react";
import './styles.css'
export default function SortTodo({ setTodos }) {
  const [sort, setSort] = useState("All");

  const fetchData = async (sortStatus) => {
    try {
      const response = await fetch(
        "https://61498bf2035b3600175ba32f.mockapi.io/todo"
      );
      const jsonData = await response.json();
      if (sortStatus === "Completed") {
        let newTodos = [...jsonData].filter((todo) => {
          console.log(todo);
          if (todo.completed === true) {
            return todo;
          }
        });
        console.log(newTodos);
        setTodos(newTodos);
      } else if (sortStatus === "Pending") {
        let newTodos = [...jsonData].filter((todo) => {
          console.log(todo);
          if (todo.completed === false) {
            return todo;
          }
        });
        console.log(newTodos);
        setTodos(newTodos);
      } else {
        setTodos(jsonData);
      }
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  let changeSort = (el) => {
    let newSort = el;
    setSort(newSort);
    console.log(newSort);
    fetchData(newSort);
  };
  return (
    <div className ='sort-row'>
      <input
        type="button"
        value="All"
        className="all-btn"
        onClick={(e) => changeSort(e.target.value)}
      />
      <input
        type="button"
        value="Pending"
        className="pending-btn"
        onClick={(e) => changeSort(e.target.value)}
      />
      <input
        type="button"
        value="Completed"
        className="completed-btn"
        onClick={(e) => changeSort(e.target.value)}
      />
    </div>
  );
}
