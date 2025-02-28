import { render, screen } from "@testing-library/react";
import TodoItem from "../../08-useReducer/TodoItem";

describe("testing in component TodoItem", () => {
  test("debe mostrar el Todo Pendiente de completar ", () => {});
});

// describe("testing in component TodoItem", () => {
//   const todo = {
//     id: 1,
//     description: "la gema del alma",
//     done: false,
//   };

//   const onRemoveMock = jest.fn();
//   const onToggleMock = jest.fn();

//   beforeEach(() => jest.clearAllMocks());

//   test("debe mostrar el Todo Pendiente de completar  ", () => {
//     render(
//       <TodoItem res={todo} onRemove={onRemoveMock} onToggle={onToggleMock} />
//     );
//     const element = screen.getAllByLabelText("tr");
//     expect(element).toBeTruthy();
//   });
// });
