import React from "react";
import { connect } from "react-redux";

import Task from "./Task";

const filterTodos = (todoList, filter) => {
  switch (filter) {
    case "done":
      return todoList.filter((todo) => todo.isDone === true);
    case "not done":
      return todoList.filter((todo) => todo.isDone === false);
    case "default":
    default:
      return todoList;
  }
};

const ListTask = ({ todoList, filter }) => {
  const todoListFiltred = filterTodos(todoList, filter);
  return (
    <div className="list-task">
      {todoListFiltred.map((todo) => (
        <Task key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

const mapStatetoProps = (state) => ({
  todoList: state.todos,
  filter: state.filterTasks,
});

export default connect(mapStatetoProps)(ListTask);
