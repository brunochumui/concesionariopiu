import React from "react";
import "./App.css";

export default function SobreNosotros() {
  return (
    <>
      <section className="sobre-nosotros">

        <div className="sobre-texto">
          <h1>SOBRE NOSOTROS</h1>
        </div>

        <div className="texto1">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="sobre-imagen">
          <img src="/imagenes/sobrenos.webp" alt="Auto" />
        </div>

        <div className="texto2">
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia  
            deserunt mollit anim id est laborum.
          </p>
        </div>

      </section>

      <div className="barra-roja"></div>
    </>
  );
}
