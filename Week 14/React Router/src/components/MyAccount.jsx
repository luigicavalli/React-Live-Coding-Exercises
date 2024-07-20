import { useParams } from "react-router-dom";

export function MyAccount() {
  const { id } = useParams();

  return (
    <div>
      <h3>Welcome, {id}!</h3>
    </div>
  );
}
