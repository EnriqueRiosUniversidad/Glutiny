import React from 'react';

const Modal = ({ isOpen, closeModal, producto }) => {
  const { nombre, tipo, costo, descripcion, fotoSrc } = producto;

  if (!isOpen) return null;

  return (
    <div style={modalOverlayStyle} onClick={closeModal}>
      <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
        <img src={fotoSrc} alt={`Foto de ${nombre}`} style={fotoStyle} />
        <div style={contenidoStyle}>
          <div style={botonContainerStyle}>
            <button style={botonStyle} onClick={closeModal}>
              &times;
            </button>
          </div>
          <h2>{nombre}</h2>
          <p>
            <strong>Descripción:</strong> {descripcion} <br />
            <strong>Tipo:</strong> {tipo} <br />
            <strong>Costo:</strong> {costo}
          </p>
        </div>
      </div>
    </div>
  );
};

const modalOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const modalContentStyle = {
  background: '#fff',
  padding: '20px',
  borderRadius: '5px',
  display: 'flex',
  width: '90%',
};

const fotoStyle = {
  width: '50%',
  height: 'auto',
  marginRight: '20px',
};

const contenidoStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const botonContainerStyle = {
  marginLeft: '100%', // Alinea el botón al lado derecho
  marginTop:'0px',
  
  background: '#fff',
  border: 'none',
};

const botonStyle = {
  cursor: 'pointer',
  fontSize: '24px',
  background: '#fff',
  border: 'none',
};

export default Modal;
