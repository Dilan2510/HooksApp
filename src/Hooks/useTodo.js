import { useEffect, useReducer } from "react";
import { TodoReducers } from "../08-useReducer/todo-reducer";

const initialTodo = [];

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodo = () => {
  const [state, dispatch] = useReducer(TodoReducers, initialTodo, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state));
  }, [state]);

  const handleSubmit = (event) => {
    const action = {
      type: "[Todo]add todo",
      payload: event,
    };
    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    dispatch({
      type: "[Todo]delete todo",
      payload: id,
    });
  };

  const handleToggleTodo = (id) => {
    dispatch({
      type: "[Todo]Toggle todo",
      payload: id,
    });
  };

  return {
    handleSubmit,
    handleDeleteTodo,
    handleToggleTodo,
    state,
  };
};
