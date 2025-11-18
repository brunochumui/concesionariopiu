import React from "react";
import "../App.css";

export default function CatalogoColeccion() {
  return (
    <div className="page">
      <h1>Autos de Colección</h1>

      <div className="catalogo-lista">

        <div className="catalogo-item">
          <img src="/imagenes/mustang67.jpg" alt="Mustang 1967" />
          <div>
            <h2>Ford Mustang 1967</h2>
            <p>Una leyenda americana con personalidad y sonido inconfundible.</p>
            <p><strong>Precio estimado:</strong> $75.000.000</p>
          </div>
        </div>

        <div className="catalogo-item">
          <img src="/imagenes/camaro69.jpg" alt="Camaro SS 1969" />
          <div>
            <h2>Chevrolet Camaro SS 1969</h2>
            <p>Clásico musculoso con estética agresiva y motor poderoso.</p>
            <p><strong>Precio estimado:</strong> $82.000.000</p>
          </div>
        </div>

      </div>

      <a href="/modelos" className="boton-volver">Volver</a>
    </div>
  );
}
