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
      setFormData({ nombre: "", email: "", mensaje: "" });
    } catch (err) {
      alert("Error al enviar la solicitud");
    }
  };

  return (
    <div className="page otros-page">

      <h1>OTROS SERVICIOS</h1>

      <div className="otros-contenedor">

        <div className="otros-bloque">
          <h3>Preguntas Frecuentes</h3>
          <p>
            Encontrá respuestas a dudas comunes sobre modelos, turnos, garantías,
            servicios y más.
          </p>
        </div>

        <div className="otros-bloque">
          <h3>Información de Contacto</h3>
          <p>
            Podés comunicarte con nosotros para consultas personalizadas sobre
            disponibilidad, precios y asistencia técnica.
          </p>
        </div>

        <div className="otros-bloque">
          <h3>Información Adicional</h3>
          <p>
            Detalles extras sobre nuestros servicios, atención al cliente y
            novedades del concesionario.
          </p>
        </div>

      </div>

      {/* ==== FORMULARIO DEBAJO ==== */}
      <div className="formulario-contenedor">

        <h2>Solicitar Información</h2>
        <p className="form-desc">
          Desde aquí podés solicitar información de modelos, precios,
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

    </div>
  );
}

export default Otros;
