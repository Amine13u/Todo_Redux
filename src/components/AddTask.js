import React, { useState } from "react";
import { connect } from "react-redux";

import { addTodo } from "../js/Actions";

const AddTask = ({ todoList, addTodo }) => {
  const [description, setDescription] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      description: description,
      isDone: false,
      id: todoList.length + 1,
    };
    addTodo(newTodo);
    setDescription("");
  };
  return (
    <div className="add-task">
      <h1>Todo App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button>ADD</button>
      </form>
    </div>
  );
};

const mapStatetoProps = (state) => ({
  todoList: state.todos,
  filter: state.filterTasks,
});

export default connect(mapStatetoProps, { addTodo })(AddTask);
