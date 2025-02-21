import { useForm } from "../Hooks/useForm";

const FormWithCustomHook = () => {
  const { InputValue, onInputChange, onResetForm } = useForm({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = InputValue;

  return (
    <>
      <h1>formulario con Custom hook</h1>
      <hr />
      <input
        type="text"
        className="form-control mt-2"
        placeholder="username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="text"
        className="form-control mt-2"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <input
        type="password"
        className="form-control mt-2"
        placeholder="password"
        name="password"
        value={password}
        onChange={onInputChange}
      />
      <button className="btn btn-primary mt-3" onClick={onResetForm}>
        Reset
      </button>
    </>
  );
};

export default FormWithCustomHook;
