// RestauranteDetalle.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { restaurantes } from './datosRestaurante';

const RestauranteDetalle = () => {
  const { id } = useParams();
  const restaurante = restaurantes.find((r) => r.id === parseInt(id, 10));

  if (!restaurante) {
    return <div>Restaurante no encontrado</div>;
  }

  return (
    <div>
      <h2>{restaurante.titulo}</h2>
      {/* Resto de tu lógica para mostrar detalles */}
    </div>
  );
};

export default RestauranteDetalle;
