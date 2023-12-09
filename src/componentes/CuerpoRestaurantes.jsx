import React from 'react';
import { Link } from 'react-router-dom';
import RecuadroContenido from './RecuadroContenido';
import { restaurantes } from './datosRestaurante';

const CuerpoRestaurantes = ({ filtroTipo }) => {
  const restaurantesFiltrados = filtroTipo
    ? restaurantes.filter((restaurante) => restaurante.tipo.includes(filtroTipo))
    : restaurantes;

  return (
    <div className="row">
      <div className="col-12 mt-3">
        <div className="scrollable-content">
          {restaurantesFiltrados.map((restaurante) => (
            
              <RecuadroContenido
                restaurante={restaurante}
                
              />
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default CuerpoRestaurantes;
