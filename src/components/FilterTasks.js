import React from "react";
import { connect } from "react-redux";

import { filterTodo } from "../js/Actions";

const FilterTasks = ({ filterTodo }) => {
  const handleInput = (e) => {
    filterTodo(e.target.value);
  };
  return (
    <form className="filter">
      <div>
        <input
          name="filter"
          type="radio"
          value="default"
          onInput={handleInput}
          defaultChecked
        />
        <label for="default">Default</label>
      </div>

      <div>
        <input name="filter" type="radio" value="done" onInput={handleInput} />
        <label for="done"> Done </label>
      </div>

      <div>
        <input
          name="filter"
          type="radio"
          value="not done"
          onInput={handleInput}
        />
        <label for="not done">Not Done Yet</label>
      </div>
    </form>
  );
};

export default connect(null, { filterTodo })(FilterTasks);
