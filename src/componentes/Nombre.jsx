import React from "react";
import "../App.css";

function Nombre() {
  return (
    <>
      <section className="nombre">
        <div className="nombre-text">
          <h1>
            <span>   PIU CARS</span> <br /> PRESENTATION
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
            in voluptate.
          </p>
        </div>

        {/* Bloque de imágenes */}
        <div className="autos">
          <div className="auto-card">
            <img src="/imagenes/auto.jpg" alt="auto 1" />
          </div>
          <div className="auto-card">
            <img src="/imagenes/autodos.jpg" alt="auto 2" />
          </div>
        </div>
      </section>

      {/* 🔴 Rectángulo rojo debajo */}
      <div className="barra-roja"></div>
    </>
  );
}

export default Nombre;
