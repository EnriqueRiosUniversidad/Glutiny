import React, { useState } from 'react';
import Producto from './Producto';

const ProductosRestaurante = ({ productos }) => {
  const [filtros, setFiltros] = useState({
    celiaco: false,
    vegano: false,
    sinLactosa: false,
  });

  // Filtrar productos según los filtros seleccionados
  const productosFiltrados = productos.filter((producto) => {
    const tipoLowerCase = producto.tipo.toLowerCase();

    return (
      (!filtros.celiaco || tipoLowerCase.includes('celiaco')) ||
      (!filtros.vegano || tipoLowerCase.includes('vegano')) ||
      (!filtros.sinLactosa || tipoLowerCase.includes('sin lactosa'))
    );
  });

  // Función para manejar cambios en los filtros
  const handleFiltroChange = (filtro) => {
    setFiltros((prevFiltros) => ({
      ...prevFiltros,
      [filtro]: !prevFiltros[filtro],
    }));
  };

  return (
    <div>
      {/* Botones de filtro */}
      <div className="row" style={contenedorBotones}>
        <div className="col-12 mt-3 mb-2" style={contenedorSelectores}>
          <button
            type="button"
            className={`btn btn-success ${filtros.vegano ? 'active' : ''}`}
            style={selectorStyle}
            onClick={() => handleFiltroChange('vegano')}
          >
            Veganos
          </button>
          <button
            type="button"
            className={`btn btn-success ${filtros.celiaco ? 'active' : ''}`}
            style={selectorStyle}
            onClick={() => handleFiltroChange('celiaco')}
          >
            Celiacos
          </button>
          <button
            type="button"
            className={`btn btn-success ${filtros.sinLactosa ? 'active' : ''}`}
            style={selectorStyle}
            onClick={() => handleFiltroChange('sinLactosa')}
          >
            Sin Lactosa
          </button>
        </div>
      </div>

      {productosFiltrados.map((producto) => (
        <Producto key={producto.id} producto={producto} visible={true} />
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
