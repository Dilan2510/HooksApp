import { useState } from "react";

export const useForm = (InitialForm = {}) => {
  const [InputValue, setInputValue] = useState(InitialForm);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setInputValue({ ...InputValue, [name]: value });
  };

  const onResetForm = () => {
    setInputValue(InitialForm);
  };

  return {
    ...InputValue,
    InputValue,
    onInputChange,
    onResetForm,
  };
};
