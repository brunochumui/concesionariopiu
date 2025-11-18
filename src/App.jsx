import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./componentes/Navbar.jsx";
import Nombre from "./componentes/Nombre.jsx";
import SobreNosotros from "./sobrenosotros.jsx";
import Modelos from "./componentes/Modelos.jsx";
import Historia from "./Historia.jsx";
import Servicios from "./Servicios.jsx";
import Otros from "./Otros.jsx";

// IMPORTAR LOS NUEVOS ARCHIVOS DEL CATÁLOGO
import CatalogoCotidianos from "./catalogos/CatalogoCotidianos.jsx";
import CatalogoDeportivos from "./catalogos/CatalogoDeportivos.jsx";
import CatalogoColeccion from "./catalogos/CatalogoColeccion.jsx";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route path="/" element={<Nombre />} />
        <Route path="/sobrenosotros" element={<SobreNosotros />} />
        <Route path="/modelos" element={<Modelos />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/otros" element={<Otros />} />

        {/* RUTAS NUEVAS DEL CATÁLOGO */}
        <Route path="/catalogo/cotidianos" element={<CatalogoCotidianos />} />
        <Route path="/catalogo/deportivos" element={<CatalogoDeportivos />} />
        <Route path="/catalogo/coleccion" element={<CatalogoColeccion />} />
      </Routes>
    </div>
  );
}

export default App;
