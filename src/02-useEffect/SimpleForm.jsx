import { useEffect } from "react";
import { useState } from "react";
import { Message } from "./Message";

const SimpleForm = () => {
  const [InputValue, setInputValue] = useState({
    username: "Dilan",
    email: "brandondilangg@gmail.com",
  });

  const { username, email } = InputValue;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setInputValue({ ...InputValue, [name]: value });
  };

  useEffect(() => {
    // console.log("Tolken UseEffect");
  }, []);

  useEffect(() => {
    // console.log("form UseEffect Change");
  }, [InputValue]);

  useEffect(() => {
    // console.log("form UseEffect Change Email");
  }, [email]);

  return (
    <>
      <h1>SimpleForm</h1>
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
        className="form-control"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      {username === "Dilan2" && <Message />}
    </>
  );
};

export default SimpleForm;
