import { Routes, Route } from "react-router-dom";
import { Catalogue } from "./components/Catalogue.jsx";
import { Product } from "./components/Product.jsx";
import { Navbar } from "./components/Navbar.jsx";
import "./index.css";
import { Fragment } from "react";

function App() {
  return (
    <div id="body">
      <Navbar />
      <div className="grow-1">
        <Routes>
          <Route path="products" element={<Catalogue />}>
            <Route path=":id" element={<Product />} />
          </Route>
          <Route path="**" element={<div>Path not found</div>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
