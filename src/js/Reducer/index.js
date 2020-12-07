import {
  ADD_TODO,
  EDIT_TODO,
  TOGGLE_COMPLETE,
  REMOVE_TODO,
  FILTER_TODO,
} from "../Const";

const initialState = {
  todos: [{ id: 1, description: "Learn React-Redux", isDone: false }],
  filterTasks: "default",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        ),
      };
    case TOGGLE_COMPLETE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
        ),
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case FILTER_TODO:
      return {
        ...state,
        filterTasks: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
