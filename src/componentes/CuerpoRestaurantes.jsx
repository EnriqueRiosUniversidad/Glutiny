
import React from 'react';
import RecuadroContenido from './RecuadroContenido';
import * as pictures from '../img/pictures';
import { Link } from 'react-router-dom';
import { restaurantes } from './datosRestaurante';
export default function CuerpoRestaurantes({ filtroTipo }) {
  // Filtrar restaurantes según el tipo seleccionado
  const restaurantesFiltrados = filtroTipo
    ? restaurantes.filter((restaurante) => restaurante.tipo.includes(filtroTipo))
    : restaurantes;

  return (
    <div className="row">
    <div className="col-12 mt-3">
      <div className="scrollable-content">
        {restaurantesFiltrados.map((restaurante) => (
          <Link key={restaurante.id} to={`/restaurantes/${restaurante.id}`}>
            <RecuadroContenido
              fotoSrc={restaurante.fotoSrc}
              titulo={restaurante.titulo}
              direccion={restaurante.direccion}
              horas={restaurante.horas}
              tipo={restaurante.tipo}
              telefono={restaurante.telefono}
            />
          </Link>
        ))}
      </div>
    </div>
  </div>
);
};




