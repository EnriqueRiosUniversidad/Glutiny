import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './componentes/Menu';
import Restaurante from './componentes/Restaurante';
import RestauranteDetalle from './componentes/RestauranteDetalle';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/restaurantes" element={<Restaurante />} />
        <Route path="/restaurantes/:id" element={<RestauranteDetalle />} />
        {/* Otras rutas si las tienes */}
      </Routes>
      <Menu />
    </Router>
  );
}

export default App;
