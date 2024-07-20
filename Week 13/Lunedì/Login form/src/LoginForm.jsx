import { useEffect, useRef, useState } from "react";

export function LoginForm() {
  const nameRef = useRef(null);
  const passwordRef = useRef(null);
  const [password, setPassword] = useState("");

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  function handleSubmit($event) {
    $event.preventDefault();
    alert(`Nome: ${nameRef.current.value}; Password: ${passwordRef.current.value}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input ref={nameRef} name="username" type="text" />
      <label htmlFor="password">Password</label>
      <input
        value={password}
        onChange={(event) => {setPassword(event.target.value)}}
        ref={passwordRef}
        name="password"
        type="password"
      />
      <button type="submit">Login</button>
      <button type="reset">Reset</button>
    </form>
  );
}
