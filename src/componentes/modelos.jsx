import React, { useState } from "react";
import "../App.css";

export default function Modelos() {
  const [mostrarCategorias, setMostrarCategorias] = useState(false);

  return (
    <>
      <section className="catalogo">

        <div className="catalogo-texto">
          <h3>Thynk<br />Unlimited.</h3>
          <h1>CATALOGO</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <button
            className="boton-vermas"
            onClick={() => setMostrarCategorias(true)}
          >
            VER MÁS
          </button>
        </div>

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

      </section>

      {mostrarCategorias && (
        <section className="categorias">
          <h2>Categorías</h2>

          <div className="categorias-grid">

            <div className="categoria-card">
              <h3>Autos Cotidianos</h3>
              <img src="/imagenes/cotidiano.jpg" alt="Auto 5" />
              <p>Modelos prácticos, económicos y de uso diario.</p>

              <a href="/catalogo/cotidianos" className="boton-ir">Ver catálogo</a>
            </div>

            <div className="categoria-card">
              <h3>Autos Deportivos</h3>
              <img src="/imagenes/deportivo.jpg" alt="Auto 6" />
              <p>Potencia, rendimiento y estilo para los amantes de la velocidad.</p>

              <a href="/catalogo/deportivos" className="boton-ir">Ver catálogo</a>
            </div>

            <div className="categoria-card">
              <h3>Autos de Colección</h3>
              <img src="/imagenes/coleccion.jpg" alt="Auto 7" />
              <p>Piezas únicas, históricas y clásicas del automovilismo.</p>

              <a href="/catalogo/coleccion" className="boton-ir">Ver catálogo</a>
            </div>

          </div>
        </section>
      )}

      <div className="barra-roja"></div>
    </>
  );
}
