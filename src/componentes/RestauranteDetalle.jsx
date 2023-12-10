// RestauranteDetalle.jsx
import React from 'react';
import RecuadroContenido from './RecuadroContenidoRestaurantes';
import { useParams } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Menu';
import CuerpoRestaurantes from './CuerpoRestaurantes';
import Buscador from './Buscador';
import * as pictures from '../img/pictures';
// Asegúrate de importar o definir 'restaurantes' aquí
import { restaurantes, productos } from './datosRestaurante'; // Ajusta la ruta según la ubicación real de tus datos

import ProductosRestaurante from './ProductosRestaurante';
function RestauranteDetalle() {
  const { id } = useParams();
  const restaurante = restaurantes.find((r) => r.id === parseInt(id));

  if (!restaurante) {
    return <p>Restaurante no encontrado</p>;
  }

  const productosRestaurante = productos.filter((p) => p.restauranteId === restaurante.id);

  return (
    <div>
      <div className="col-12 py-3">
        <img
          src={pictures.logoRestaurante}
          alt="Logo de tu empresa"
          className="logo"
          style={{ width: '190px', height: '50px' }}
        />
      </div>
      {/* Mostrar toda la información del restaurante en el contexto de detalle */}
      <RecuadroContenido restaurante={restaurante} detalleStyle={true} showFullContent={true} style={{ marginBottom: '0px' ,padding:'0px'}} />

      
        <Buscador style={{ marginBottom: '0' ,padding:'0px'}} />
        {/* Botones de filtro */}
      
      <ProductosRestaurante productos={productosRestaurante} />
      <Menu />
    </div>
  );
}

export default RestauranteDetalle;