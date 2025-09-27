import React from "react";
import "../App.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li className="active">Inicio</li>
        <li>Sobre Nosotros</li>
        <li>Modelo</li>
        <li>Otros</li>
      </ul>
    </nav>
  );
}

export default Navbar;
