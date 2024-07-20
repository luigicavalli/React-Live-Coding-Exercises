import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div>
      <ul style={{justifyContent: "space-between", width: "100vw"}} className="row">
        <li>
          <Link to={"products"}>Catalogo</Link>
        </li>
        <li>
          <Link to={"profile"}>Profilo</Link>
        </li>
        <li>
          <Link to={"settings"}>Impostazioni</Link>
        </li>
      </ul>
    </div>
  );
}
