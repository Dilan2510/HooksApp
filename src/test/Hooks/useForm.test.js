import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../Hooks/useForm";

describe("test in component useForm ", () => {
  const InputFrom = {
    name: "Beimax",
    email: "brandondilangg@gmail.com",
  };
  const newName = "Dilan";

  test("debe regresar los valores por defecto ", () => {
    const { result } = renderHook(() => useForm(InputFrom));
    expect(result.current).toEqual({
      InputValue: InputFrom,
      name: InputFrom.name,
      email: InputFrom.email,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });

  test("debe de cambiar el nombre del formulario ", () => {
    const { result } = renderHook(() => useForm(InputFrom));
    const { onInputChange } = result.current;
    act(() => {
      onInputChange({ target: { name: "name", value: newName } });
    });
    expect(result.current.name).toBe(newName);
  });

  test("debe RESET los valores  ", () => {
    const { result } = renderHook(() => useForm(InputFrom));
    const { onResetForm, onInputChange } = result.current;
    act(() => {
      onInputChange({ target: { name: "name", value: newName } });
      onResetForm();
    });
    expect(result.current.name).toBe(InputFrom.name);
  });
});
