import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { receta } from './DatosReceta';

const RecuadroContenidoRecetas = ({ receta, detalleStyle = false, showFullContent = true }) => {
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
    flex: 1, // Hace que el contenido derecho ocupe todo el espacio disponible
  };

  const tituloContainerStyle = {
    textAlign: 'center', // Alinea el texto al centro
    marginBottom: '10px', // Agrega un espacio inferior al título
  };

  const tituloStyle = {
    fontSize: detalleStyle ? '3em' : '1em',
    color: detalleStyle ? '#6A8F00' : 'black',
    fontFamily: detalleStyle ? 'Crimson Text, serif' : 'inherit',
  };

  const navigate = useNavigate();

  const handleRecetaClick = () => {
    // Redirige a la página de detalles del recetas
    navigate(`/receta-detalle/${receta.id}`);
    // Muestra el ID del restaurante en la consola
    console.log('ID del Receta:', receta.id);
  };

  return (
    <div style={recuadroStyle} onClick={handleRecetaClick}>
      {/* Foto a la izquierda */}
      <img src={receta.fotoSrc} alt={`Foto de ${receta.titulo}`} style={fotoStyle} />

      {/* Contenido a la derecha */}
      <div style={contenidoDerechoStyle}>
        <div style={tituloContainerStyle}>
          <h2 style={tituloStyle}>{receta.titulo}</h2>
        </div>
        {showFullContent && (
          <p>
            <strong> </strong> {receta.direccion}<br />
          </p>
        )}
      </div>
    </div>
  );
};

export default RecuadroContenidoRecetas;
