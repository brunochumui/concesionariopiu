import React from "react";
import "../App.css";

export default function CatalogoCotidianos() {
  return (
    <div className="page">
      <h1>Autos Cotidianos</h1>

      <div className="catalogo-lista">

        <div className="catalogo-item">
          <img src="/imagenes/cronos.jpg" alt="Fiat Cronos" />
          <div>
            <h2>Fiat Cronos</h2>
            <p>Un sedán económico, ideal para uso diario y muy rendidor.</p>
            <p><strong>Precio estimado:</strong> $12.500.000</p>
          </div>
        </div>

        <div className="catalogo-item">
          <img src="/imagenes/etios.jpg" alt="Toyota Etios" />
          <div>
            <h2>Toyota Etios</h2>
            <p>Confiable, práctico y uno de los más elegidos en Argentina.</p>
            <p><strong>Precio estimado:</strong> $10.700.000</p>
          </div>
        </div>

      </div>

      <a href="/modelos" className="boton-volver">Volver</a>
    </div>
  );
}
