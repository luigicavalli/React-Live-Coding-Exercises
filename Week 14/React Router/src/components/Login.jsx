import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      console.log(user);
      navigate(`/account/${user.username}`);
    },
    [navigate, user]
  );

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input
        onChange={(event) =>
          setUser((prevState) => ({
            ...prevState,
            username: event.target.value,
          }))
        }
        type="text"
        name="username"
      />

      <label htmlFor="password">Password</label>
      <input
        onChange={(event) =>
          setUser((prevState) => ({
            ...prevState,
            password: event.target.value,
          }))
        }
        type="password"
        name="password"
      />

      <button type="submit">Login</button>
    </form>
  );
}
