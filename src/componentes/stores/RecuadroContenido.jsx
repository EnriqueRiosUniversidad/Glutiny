import React from 'react';
import { Link } from 'react-router-dom';

const RecuadroContenido = ({ fotoSrc, titulo, direccion, horas, tipo, telefono }) => {
  const recuadroStyle = {
    backgroundColor: 'rgba(174, 230, 154, 0.4)',
    padding: '10px',
    marginBottom: '10px',
    height: '20%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  };

  const fotoStyle = {
    width: '35%',
    height: 'auto',
    marginRight: '20px',
  };

  const contenidoDerechoStyle = {
    color: 'black',
  };

  return (
    <Link to={`/tiendas/${titulo.toLowerCase()}`}>
      <div style={recuadroStyle}>
        {/* Foto a la izquierda */}
        

        {/* Contenido a la derecha */}
        <div style={contenidoDerechoStyle}>
          <h2>{titulo}</h2>
          <p>
            <strong>Dirección:</strong> {direccion}<br />
            <strong>Horas:</strong> {horas}<br />
            <strong>Tipo:</strong> {tipo}<br />
            <strong>Teléfono:</strong> {telefono}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default RecuadroContenido;
