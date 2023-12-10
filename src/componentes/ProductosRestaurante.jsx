import React, { useState } from 'react';
import Producto from './Producto';
import { productos } from './datosRestaurante';

const ProductosRestaurante = ({ productos }) => {
  const [filtroTipo, setFiltroTipo] = useState(null);

  // Filtrar productos según los filtros seleccionados
  const productosFiltrados = productos
    ? productos.filter((producto) => producto.tipo.includes(filtroTipo))
    : productos;

  // Función para manejar cambios en los filtros
  const handleFiltroClick = (tipo) => {
    setFiltroTipo(tipo);
  };

  return (
    <div>
      {/* Botones de filtro */}
      <div className="row" style={contenedorBotones}>
        <div className="col-12 mt-3 mb-2" style={contenedorSelectores}>
          <button
            type="button"
            className="btn btn-success"
            style={selectorStyle}
            onClick={() => handleFiltroClick('Vegano')}
          >
            Veganos
          </button>
          <button
            type="button"
            className="btn btn-success"
            style={selectorStyle}
            onClick={() => handleFiltroClick('Celiaco')}
          >
            Celiacos
          </button>
          <button
            type="button"
            className="btn btn-success"
            style={selectorStyle}
            onClick={() => handleFiltroClick('Sin Lactosa')}
          >
            Sin Lactosa
          </button>
        </div>
      </div>

      {productosFiltrados.map((producto) => (
        <Producto key={producto.id} producto={producto} />
      ))}
    </div>
  );
};

// Estilos CSS (Asumiendo que estos estilos están definidos en tu componente)
const contenedorSelectores = {
  display: 'flex',
  marginTop: '10px',
  marginBottom: '10px',
};

const selectorStyle = {
  flex: 1,
  marginRight: '7px',
  backgroundColor: 'rgba(174, 230, 154, 0.4)',
  color: '#000',
  fontSize: '95%',
  border: 'none',
  borderRadius: '5px',
};

const contenedorBotones = {
  backgroundColor: '#fff',
  padding: '0px',
  borderRadius: '5px',
};

export default ProductosRestaurante;
