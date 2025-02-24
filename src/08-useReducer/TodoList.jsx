import TodoItem from "./TodoItem";

/* eslint-disable react/prop-types */
export const TodoList = ({ state = [], onRemove, onToggle }) => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {state.map((res) => (
            <TodoItem
              res={res}
              key={res.id}
              onRemove={onRemove}
              onToggle={onToggle}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};
