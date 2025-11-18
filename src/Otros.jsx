import React, { useState } from "react";
import "./App.css";
import axios from "axios";

function Otros() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8080/api/solicitudes", formData);
      alert("Solicitud enviada correctamente!");

      setFormData({
        nombre: "",
        email: "",
        mensaje: "",
      });

    } catch (err) {
      alert("Error al enviar la solicitud");
    }
  };

  return (
    <div className="page otros-page">

      <h1>OTROS SERVICIOS</h1>

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
            Detalles extras sobre nuestros servicios, atención al cliente y
            novedades del concesionario.
          </p>
        </div>

      </div>

      <div className="formulario-contenedor">

        <h2>Solicitar Información</h2>
        <p className="form-desc">
          Desde acá podés solicitar información de modelos, precios,
          disponibilidad o coordinar una visita.
        </p>

        <form className="formulario" onSubmit={handleSubmit}>

          <div className="campo">
            <label>Nombre</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>

          <div className="campo">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="campo">
            <label>Mensaje</label>
            <textarea
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="boton-enviar">
            Enviar
          </button>

        </form>

      </div>

      <div className="barra-roja"></div>
    </div>
  );
}

export default Otros;