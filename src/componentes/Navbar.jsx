import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/sobrenosotros">Sobre Nosotros</Link></li>
        <li><Link to="#">Modelo</Link></li>
        <li><Link to="#">Otros</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
