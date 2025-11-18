import React from "react";
import "../App.css";

export default function CatalogoDeportivos() {
  return (
    <div className="page">
      <h1>Autos Deportivos</h1>

      <div className="catalogo-lista">

        <div className="catalogo-item">
          <img src="/imagenes/supra.jpg" alt="Toyota Supra" />
          <div>
            <h2>Toyota Supra</h2>
            <p>Un ícono japonés. Potencia, respuesta y estilo único.</p>
            <p><strong>Precio estimado:</strong> $48.000.000</p>
          </div>
        </div>

        <div className="catalogo-item">
          <img src="/imagenes/gtr.jpg" alt="Nissan GTR" />
          <div>
            <h2>Nissan GTR</h2>
            <p>Fuerza bruta y precisión extrema.</p>
            <p><strong>Precio estimado:</strong> $95.000.000</p>
          </div>
        </div>

      </div>

      <a href="/modelos" className="boton-volver">Volver</a>
    </div>
  );
}
