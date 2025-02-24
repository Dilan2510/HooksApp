const initialReducer = [
  {
    id: 1,
    todo: "Buscando la gema del alma",
    done: false,
  },
];

const todoReducer = (state = initialReducer, action = {}) => {
  if (action.type === "[Todo]add todo") {
    return [...state, action.payload];
  }
  return state;
};

let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: "Buscando la gema del poder",
  done: false,
};

const actionTodoAdd = {
  type: "[Todo]add todo",
  payload: newTodo,
};

todos = todoReducer(todos, actionTodoAdd);

console.log(todos);
