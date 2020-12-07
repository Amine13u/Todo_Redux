import React from "react";

import AddTask from "./components/AddTask";
import FilterTasks from "./components/FilterTasks";
import ListTask from "./components/ListTask";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <AddTask />
      <FilterTasks />
      <ListTask />
    </div>
  );
};

export default App;
