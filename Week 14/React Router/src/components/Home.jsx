import { useEffect } from "react";

export function Home() {
  useEffect(() => {
    console.log("I'm here");
  }, []);

  return (
    <div>
      <h1>Welcome to this website!</h1>
    </div>
  );
}
