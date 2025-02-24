/* eslint-disable react/prop-types */
import { useForm } from "../Hooks/useForm";

const AddTodo = ({ onNewTodo }) => {
  const { InputValue, onInputChange, onResetForm } = useForm({
    description: "",
  });
  const { description } = InputValue;

  const OnSubmit = (event) => {
    event.preventDefault();
    if (description.length <= 1) {
      return;
    } else {
      const newTodo = {
        id: new Date().getTime(),
        todo: description,
        done: false,
      };
      onNewTodo(newTodo);
      onResetForm();
    }
  };

  return (
    <>
      <form aria-label="form" onSubmit={OnSubmit}>
        <input
          type="text"
          placeholder="¿Que hay que hacer?"
          className="form-control"
          name="description"
          value={description}
          onChange={onInputChange}
        />
        <button type="button" className="btn btn-outline-primary mt-2">
          Agregar
        </button>
      </form>
    </>
  );
};

export default AddTodo;
