import { useContext } from "react";
import { userContext } from "./Context/UserContext";
export const HomePage = () => {
  const { user } = useContext(userContext);

  return (
    <>
      <h1>HomePage</h1>
      <hr />
      <pre>{JSON.stringify(user)}</pre>
    </>
  );
};
