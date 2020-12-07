import {
  ADD_TODO,
  EDIT_TODO,
  TOGGLE_COMPLETE,
  REMOVE_TODO,
  FILTER_TODO,
} from "../Const";

export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload,
});

export const editTodo = (payload) => ({
  type: EDIT_TODO,
  payload,
});

export const toggle = (payload) => ({
  type: TOGGLE_COMPLETE,
  payload,
});

export const removeTodo = (payload) => ({
  type: REMOVE_TODO,
  payload,
});

export const filterTodo = (payload) => ({
  type: FILTER_TODO,
  payload,
});
