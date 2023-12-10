  // RecuadroContenidoTienda.jsx
  import React from 'react';
  import { Link, useNavigate } from 'react-router-dom';

  const RecuadroContenidoTienda = ({ Tienda, detalleStyle = false, showFullContent = true }) => {
    const navigate = useNavigate();

    // Verificar si Tienda está definido
    if (!Tienda) {
      return null; // Puedes retornar algo diferente o simplemente no renderizar nada
    }

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
      textAlign: 'center',
    };
    const tituloStyle = {
      fontSize: detalleStyle ? '3em' : '1.5em',
      color: detalleStyle ? '#6A8F00' : 'black',
      fontFamily: detalleStyle ? 'Crimson Text, serif' : 'inherit',
    };

    const handleTiendaClick = () => {
      // Redirige a la página de detalles de la tienda
      navigate(`/tienda-detalle/${Tienda.id}`);
      // Muestra el ID de la tienda en la consola
      console.log('ID de la Tienda:', Tienda.id);
    };

    return (
      <div style={recuadroStyle} onClick={handleTiendaClick}>
        <img src={Tienda.fotoSrc} alt={`Foto de ${Tienda.titulo}`} style={fotoStyle} />
        <div style={contenidoDerechoStyle}>
          <div style={tituloContainerStyle}>
            <h2 style={tituloStyle}>{Tienda.titulo}</h2>
          </div>
          {showFullContent && (
            <p>
              <strong>Dirección:</strong> {Tienda.direccion}<br />
              <strong>Horas:</strong> {Tienda.horas}<br />
              <strong>Tipo:</strong> {Tienda.tipo}<br />
              <strong>Teléfono:</strong> {Tienda.telefono}
            </p>
          )}
        </div>
      </div>
    );
  };

  export default RecuadroContenidoTienda;
