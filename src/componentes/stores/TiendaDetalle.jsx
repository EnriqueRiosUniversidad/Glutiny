
import React from 'react';
import RecuadroContenidoTienda from './RecuadroContenidoTiendas';
import { useParams } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '../Menu';

import Buscador from '../Buscador';
import * as pictures from '../../img/pictures';

import { tiendas as tiendas, productos } from './datosTienda'; // Ajusta la ruta según la ubicación real de tus datos

import ProductosTienda from './ProductosTienda';
function TiendaDetalle() {
  const { id } = useParams();
  const tienda = tiendas.find((r) => r.id === parseInt(id));

  if (!tienda) {
    return <p>Tienda no encontrado</p>;
  }

  const productosTienda = productos.filter((p) => p.tiendaId === tienda.id);

  return (
    <div>
      <div className="col-12 py-3">
        <img
          src={pictures.logo}
          alt="Logo de tu empresa"
          className="logo"
          style={{ width: '150px', height: '50px' }}
        />
      </div>
      {/* Mostrar toda la información del tienda en el contexto de detalle */}
      <RecuadroContenidoTienda tienda={tienda} detalleStyle={true} showFullContent={true} style={{ marginBottom: '0px', padding: '0px' }} />


      <Buscador style={{ marginBottom: '0', padding: '0px' }} />
      {/* Botones de filtro */}

      <ProductosTienda productos={productosTienda} />
      <Menu />
    </div>
  );
}

export default TiendaDetalle;