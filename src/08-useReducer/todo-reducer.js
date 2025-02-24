export const TodoReducers = (initialTodo = [], action) => {
  switch (action.type) {
    case "[Todo]add todo":
      return [...initialTodo, action.payload];

    case "[Todo]delete todo":
      return initialTodo.filter((res) => res.id !== action.payload);

    case "[Todo]Toggle todo":
      return initialTodo.map((res) => {
        if (res.id === action.payload) {
          return {
            ...res,
            done: !res.done,
          };
        }
        return res;
      });

    default:
      return initialTodo;
  }
};
