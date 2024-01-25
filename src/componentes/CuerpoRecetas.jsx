import React from 'react';
import { Link } from 'react-router-dom';
import { recetas } from './DatosReceta';
import RecuadroContenidoReceta from './RecuadroContendioRecetas';

const CuerpoRecetas = ({ filtroTipo }) => {
  const recetasFiltrados = filtroTipo
    ? recetas.filter((receta) => receta.tipo.includes(filtroTipo))
    : recetas;

  return (
    <div className="row">
      <div className="col-12 mt-3">
        <div className="scrollable-content">
          {recetasFiltrados.map((receta) => (
            
              <RecuadroContenidoReceta
              receta={receta}
                
              />
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default CuerpoRecetas;
