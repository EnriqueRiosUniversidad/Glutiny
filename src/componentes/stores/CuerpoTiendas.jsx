// Cuerpotiendas.jsx
import React from 'react';
import RecuadroContenidoTienda from './RecuadroContenidoTiendas';
import { tiendas } from './datosTienda';

const Cuerpotiendas = ({ filtroTipo }) => {
  const tiendasFiltrados = filtroTipo
    ? tiendas.filter((tienda) => tienda.tipo.includes(filtroTipo))
    : tiendas;

  return (
    <div className="row">
      <div className="col-12 mt-3">
        <div className="scrollable-content">
          {tiendasFiltrados.map((tienda) => (
            <RecuadroContenidoTienda key={tienda.id} Tienda={tienda} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cuerpotiendas;
