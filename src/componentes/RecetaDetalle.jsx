import React from 'react';
import { useParams } from 'react-router-dom';
import * as pictures from '../img/pictures';
import { recetas } from './DatosReceta';
import Menu from './Menu';

function RecetaDetalle() {
  const { id } = useParams();
  const receta = recetas.find((r) => r.id === parseInt(id));

  if (!receta) {
    return <p>Receta no encontrada</p>;
  }

  return (
    <div>
      <div className="col-12 py-3">
        <img
          src={pictures.logoReceta}
          alt="Logo de tu empresa"
          className="logo"
          style={{ width: '150px', height: '50px' }}
        />
      </div>

      {/* Mostrar toda la información de la receta en el contexto de detalle */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 text-center py-3" style={recuadroStyle}>
            <h3>{receta.titulo}</h3>
          </div>
        </div>
        <div className="row justify-content-center"> {/* Centrar la imagen */}
          <div className="col-12 col-md-6 text-center">
            <img src={receta.fotoSrc} alt={`Foto de ${receta.titulo}`} style={{ width: '50%' }} />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="col-12 text-center py-3">
              <h3>Ingredientes</h3>
            </div>
            <p style={{ textAlign: 'justify' }}>{receta.ingredientes}</p>
            <div className="col-12 text-center py-3">
              <h3>Preparacion</h3>
            </div>
            <p style={{ textAlign: 'justify' }}>{receta.preparacion}</p>
          </div>
        </div>
      </div>
      <Menu />
    </div>
  );
}

///style
const recuadroStyle = {
  backgroundColor: 'rgba(174, 230, 154, 0.4)',
  padding: '10px',
  marginBottom: '10px',
  height: '20%',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  fontSize: '1em',
};

export default RecetaDetalle;
