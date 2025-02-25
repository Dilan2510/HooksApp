/* eslint-disable no-undef  */
import { useTodo } from "../Hooks/useTodo";
import AddTodo from "./AddTodo";
import { TodoList } from "./TodoList";

const TodoReducer = () => {
  const {
    handleSubmit,
    handleDeleteTodo,
    handleToggleTodo,
    state,
    todosCount,
    PendingTodosCount,
  } = useTodo();

  return (
    <>
      <h1>
        TodoReducer: {todosCount}
        <span>Pendientes: {PendingTodosCount}</span>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            state={state}
            onRemove={handleDeleteTodo}
            onToggle={handleToggleTodo}
          />
        </div>
        <div className="col-5">
          <h3>Agregar TODO</h3>
          <AddTodo onNewTodo={handleSubmit} />
        </div>
      </div>
    </>
  );
};

export default TodoReducer;
