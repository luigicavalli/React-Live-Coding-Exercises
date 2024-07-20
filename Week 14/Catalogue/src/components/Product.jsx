import { useParams } from "react-router-dom";

export function Product() {
  const { id } = useParams();

  return <h1>Prodotto {id}</h1>;
}
