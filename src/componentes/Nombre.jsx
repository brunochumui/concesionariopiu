import React from "react";
import "../App.css";

export default function Nombre() {
  return (
    <>
      <section className="nombre">
        <div className="nombre-text">
          <h1>
            <span>PIU CARS</span> <br /> PRESENTATION
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="autos">
          <div className="auto-card">
            <img src="/imagenes/auto.jpg" alt="auto 1" />
          </div>
          <div className="auto-card">
            <img src="/imagenes/autodos.jpg" alt="auto 2" />
          </div>
        </div>
      </section>

      <div className="barra-roja"></div>
    </>
  );
}
