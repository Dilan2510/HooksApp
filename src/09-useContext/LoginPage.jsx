import { useContext } from "react";
import { userContext } from "./Context/UserContext";

const LoginPage = () => {
  const { user, setUser } = useContext(userContext);

  return (
    <>
      <h1>LoginPage</h1>
      <pre>{JSON.stringify(user)}</pre>
      <hr />
      <button
        className="btn btn-primary"
        onClick={() =>
          setUser({
            id: 123,
            user: "Beimax",
            email: "Beimaxgg@gmail.com",
          })
        }
      >
        Setear
      </button>
    </>
  );
};

export default LoginPage;
