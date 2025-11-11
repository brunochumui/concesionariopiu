import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./componentes/Navbar.jsx";
import Nombre from "./componentes/Nombre.jsx";
import SobreNosotros from "./sobrenosotros.jsx";
import Modelos from "./componentes/modelos.jsx";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Nombre />} />
          <Route path="/sobrenosotros" element={<SobreNosotros />} />
          <Route path="/modelos" element={<Modelos />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
