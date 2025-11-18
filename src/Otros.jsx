import React from "react";

export default function Otros() {
  return (
    <>
      <div className="page">
        <h1>OTROS</h1>

        <div className="otros-contenedor">
          <div className="otros-bloque">
            <h3>Contacto</h3>
            <p>Email: contacto@piucars.com</p>
            <p>Teléfono: +54 11 3456 7890</p>
            <p>Horarios: Lunes a Viernes — 9:00 a 18:00</p>
          </div>

          <div className="otros-bloque">
            <h3>Preguntas Frecuentes</h3>
            <p>¿Aceptan autos usados como parte de pago? — Sí.</p>
            <p>¿Se puede financiar un vehículo? — Sí, con varias opciones.</p>
            <p>¿Hacen envíos a otras provincias? — Sí, con costo adicional.</p>
          </div>

          <div className="otros-bloque">
            <h3>Información Adicional</h3>
            <p>
              Para más información sobre servicios, modelos o historial del
              concesionario, visite los apartados correspondientes del sitio.
            </p>
          </div>
        </div>
      </div>

      <div className="barra-roja"></div>
    </>
  );
}
