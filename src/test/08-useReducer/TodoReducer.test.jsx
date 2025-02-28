import { render, screen } from "@testing-library/react";
import TodoReducer from "../../08-useReducer/TodoReducer";
import { useTodo } from "../../Hooks/useTodo";

jest.mock("../../Hooks/useTodo");

useTodo.mockReturnValue({
  handleSubmit: jest.fn(),
  handleDeleteTodo: jest.fn(),
  handleToggleTodo: jest.fn(),
  state: [
    { id: 1, description: "Alma", done: false },
    { id: 2, description: "Tiempo", done: false },
  ],
  todosCount: 1,
  PendingTodosCount: 2,
});

describe("testing in TodoReducer", () => {
  test("debe pasar los valores del componente ", () => {
    render(<TodoReducer />);
    expect(screen.getByText("Tiempo")).toBeTruthy();
  });
});
