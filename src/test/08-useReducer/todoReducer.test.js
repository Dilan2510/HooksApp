import { TodoReducers } from "../../08-useReducer/todo-reducer";

describe("testing in hook todoReducer", () => {
  const initialTodo = [
    {
      id: 1,
      description: "Demo Todo",
      done: false,
    },
  ];
  test("debe de regresar el estado init ", () => {
    const result = TodoReducers(initialTodo, {});
    expect(result).toBe(initialTodo);
  });

  test("Debe de agregar un todo ", () => {
    const action = {
      type: "[Todo]add todo",
      payload: {
        id: 2,
        description: "nuevo Todo # 2",
        done: false,
      },
    };
    const result = TodoReducers(initialTodo, action);
    expect(result.length).toBe(2);
    expect(result).toContain(action.payload);
  });

  test("Debe delete un todo", () => {
    const action = {
      type: "[Todo]delete todo",
      payload: 1,
    };
    const result = TodoReducers(initialTodo, action);
    expect(result.length).toBe(0);
  });

  test("debe de realizar el toggle del cambio del todo ", () => {
    const action = {
      type: "[Todo]Toggle todo",
      payload: 1,
    };
    const result = TodoReducers(initialTodo, action);
    expect(result[0].done).toBe(true);
  });
});
