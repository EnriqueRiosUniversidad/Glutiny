// RecuadroContenido.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const RecuadroContenido = ({ restaurante, detalleStyle = false, showFullContent = true }) => {
  const recuadroStyle = {
    backgroundColor: 'rgba(174, 230, 154, 0.4)',
    padding: '10px',
    marginBottom: '10px',
    height: '20%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    fontSize: '0.9em',
  };

  const fotoStyle = {
    width: '35%',
    height: 'auto',
    marginRight: '20px',
  };

  const contenidoDerechoStyle = {
    color: 'black',
  };
  const tituloContainerStyle = {
    textAlign: 'center', // Alinea el texto al centro
  };
  const tituloStyle = {
    fontSize: detalleStyle ? '3em' : '1.5em', // Ajusta el tamaño del título según la condición
    color: detalleStyle ? '#6A8F00' : 'black', // Cambia el color del título según la condición
    fontFamily: detalleStyle ? 'Crimson Text, serif' : 'inherit', // Cambia la fuente del título según la condición
  };

  const navigate = useNavigate();

  const handleRestauranteClick = () => {
    // Redirige a la página de detalles del restaurante
    navigate(`/restaurante-detalle/${restaurante.id}`);
    // Muestra el ID del restaurante en la consola
    console.log('ID del Restaurante:', restaurante.id);
  };

  return (
    <div style={recuadroStyle} onClick={handleRestauranteClick}>
    {/* Foto a la izquierda */}
    <img src={restaurante.fotoSrc} alt={`Foto de ${restaurante.titulo}`} style={fotoStyle} />

    {/* Contenido a la derecha */}
    <div style={contenidoDerechoStyle}>
    <div style={tituloContainerStyle}>
          <h2 style={tituloStyle}>{restaurante.titulo}</h2>
        </div>
      {showFullContent && (
        <p>
          <strong>Dirección:</strong> {restaurante.direccion}<br />
          <strong>Horas:</strong> {restaurante.horas}<br />
          <strong>Tipo:</strong> {restaurante.tipo}<br />
          <strong>Teléfono:</strong> {restaurante.telefono}
        </p>
      )}
    </div>
  </div>
  );
};

export default RecuadroContenido;
