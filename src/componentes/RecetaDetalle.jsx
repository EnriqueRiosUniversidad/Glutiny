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
        <div className="col-12 text-center " style={recuadroStyle}>
            <h1>{receta.titulo}</h1>
          </div>
        </div>
        <div className="row justify-content-center"> {/* Centrar la imagen */}
        <div className="col-12 text-center " style={recuadroStyle1}>
            <img src={receta.fotoSrc} alt={`Foto de ${receta.titulo}`} style={{ width: '75%' }} />
          </div>
        </div>
          <div className="col-12 ">
            <div className="col-12 align-right">
                <strong>Ingredientes</strong>
                <ul className="ingredientes-lista">
                  {receta.ingredientes.map((ingrediente, index) => (
                    <li key={index} className="ingrediente">
                      {ingrediente}
                    </li>
                  ))}
                </ul>
            </div>
           
            <div className="col-12 ">
            <p>
                <strong>Preparación</strong>
                <ul className="preparacion-lista">
                  {receta.preparacion.map((preparacion, index) => (
                    <li key={index} className="preparacion">
                      {preparacion}
                    </li>
                  ))}
                </ul>
              </p>
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
  padding: '5%', 
  margin: '0px',
  marginBottom: '10px',
  height: '100%',
  width: '100%',
  display: 'flex',
  fontSize: '1em',
};
const recuadroStyle1 = {
  padding: '0%', 
  margin: '0px',
  marginBottom: '10px',
  height: '60%',
  width: '60%',
  display: 'flex',
};

export default RecetaDetalle;