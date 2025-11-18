import React from "react";
import "./App.css";

export default function Historia() {
  return (
    <>
      <section className="pagina">

        <div className="titulo-superior">
          <h3>Thynk<br />Unlimited.</h3>
        </div>

        <div className="contenido-wrap">

          <div className="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="contenido">
            <h1>NUESTRA<br />HISTORIA</h1>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  
              incididunt ut labore et dolore magna aliqua.
            </p>

            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu  
              fugiat nulla pariatur.
            </p>

          </div>
        </div>

      </section>

      <div className="barra-roja"></div>
    </>
  );
}
