import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../Hooks/useCounter";

describe("testing in component useCounter", () => {
  test("se deben pasar los valores de state  ", () => {
    const { result } = renderHook(() => useCounter());
    const { counter, increment, desIncrement, reset } = result.current;
    expect(counter).toBe(10);
    expect(increment).toEqual(expect.any(Function));
    expect(desIncrement).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test("debe pasar el valor con 100 ", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;
    expect(counter).toBe(100);
  });

  test("debe  imcrementar  el valor del value", () => {
    const { result } = renderHook(() => useCounter());
    const { increment } = result.current;

    act(() => {
      increment();
    });
    expect(result.current.counter).toBe(11);
  });

  test("debe desIncrement el valor del value", () => {
    const { result } = renderHook(() => useCounter());
    const { desIncrement } = result.current;

    act(() => {
      desIncrement();
    });
    expect(result.current.counter).toBe(9);
  });
  test("debe reset el valor del value", () => {
    const { result } = renderHook(() => useCounter());
    const { reset } = result.current;

    act(() => {
      reset();
    });
    expect(result.current.counter).toBe(10);
  });
});
