import React from "react";
import "../App.css";

export default function Modelos() {
  return (
    <section className="catalogo">

      {/* Texto del lado izquierdo */}
      <div className="catalogo-texto">
        <h3>Thynk<br />Unlimited.</h3>
        <h1>CATALOGO</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate.
        </p>
        <button className="boton-vermas">VER MAS</button>
      </div>

      {/* Imágenes del lado derecho */}
      <div className="catalogo-imagenes">
        <div className="fila">
          <img src="/imagenes/automodelos.avif" alt="Auto 1" />
          <img src="/imagenes/automodelosdos.jpg" alt="Auto 2" />
        </div>
        <div className="fila">
          <img src="/imagenes/automodelostres.jpg" alt="Auto 3" />
          <img src="/imagenes/automodeloscuatro.jpg" alt="Auto 4" />
        </div>
      </div>

      {/* Barra roja mejorada */}
      <div className="barra-rojamod"></div>
    </section>
  );
}
