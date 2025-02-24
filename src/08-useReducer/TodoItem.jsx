/* eslint-disable react/prop-types */
const TodoItem = ({ res, onRemove, onToggle }) => {
  return (
    <>
      <tr
        className={`${res.done && "text-decoration-line-through"}`}
        key={res.id}
        onClick={() => onToggle(res.id)}
      >
        <th scope="row">{res.id}</th>
        <td>{res.todo}</td>
        <td>
          <button className="btn btn-danger" onClick={() => onRemove(res.id)}>
            Borrar
          </button>
        </td>
      </tr>
    </>
  );
};

export default TodoItem;
