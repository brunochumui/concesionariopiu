import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/sobrenosotros">Sobre Nosotros</Link></li>
        <li><Link to="/modelos">Modelos</Link></li>
        <li><Link to="/historia">Historia</Link></li>
        <li><Link to="/servicios">Servicios</Link></li>
        <li><Link to="/otros">Otros</Link></li>
      </ul>
    </nav>
  );
}
