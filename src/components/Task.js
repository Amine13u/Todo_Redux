import React from "react";
import { connect } from "react-redux";

import { toggle, removeTodo } from "../js/Actions";
import EditForm from "./EditForm";

const Task = ({ todo, toggle, removeTodo }) => {
  return (
    <div className="task">
      <p style={todo.isDone ? { textDecoration: "line-through" } : {}}>
        {todo.description}
      </p>
      <div>
        <button onClick={() => toggle(todo.id)}>
          {todo.isDone ? "UNDO" : "COMPLETE "}
        </button>
        <button onClick={() => removeTodo(todo.id)}>DELETE</button>
        {!todo.isDone && <EditForm oldTodo={todo} />}
      </div>
    </div>
  );
};

export default connect(null, { toggle, removeTodo })(Task);
