// RestauranteDetalle.jsx
import React from 'react';
import RecuadroContenido from './RecuadroContenido';
import { useParams } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Menu';
import CuerpoRestaurantes from './CuerpoRestaurantes';
import Buscador from './Buscador';
import * as pictures from '../img/pictures';
// Asegúrate de importar o definir 'restaurantes' aquí
import { restaurantes } from './datosRestaurante'; // Ajusta la ruta según la ubicación real de tus datos

function RestauranteDetalle() {
  const { id } = useParams();
  const restaurante = restaurantes.find((r) => r.id === parseInt(id));

  if (!restaurante) {
    return <p>Restaurante no encontrado</p>;
  }

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
      <RecuadroContenido restaurante={restaurante} detalleStyle={true} showFullContent={true} />
      
      <div className="container-fluid">
        <Buscador/>
        {/* Botones de filtro */}
        
        
      </div>

      <Menu />
    
    </div>
  );
}

export default RestauranteDetalle;
