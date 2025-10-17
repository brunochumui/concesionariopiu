import React from "react";
import "./App.css";

export default function SobreNosotros() {
  return (
    <section className="sobre-nosotros">
      <div className="sobre-texto">
        <h1>SOBRE NOSOTROS</h1>
      </div>

      <div className="texto1">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>

      <div className="sobre-imagen">
        <img src="./imagenes/sobrenos.webp" alt="Auto deportivo rojo" />
      </div>

      <div className="texto2">
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>
      </div>
    </section>
  );
}
