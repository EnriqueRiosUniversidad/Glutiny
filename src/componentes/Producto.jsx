// Producto.jsx
import React, { useState } from 'react';
import Modal from './Modal';

const Producto = ({ producto }) => {
  const { nombre, tipo, costo, fotoSrc } = producto;
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div style={productoStyle} onClick={openModal}>
      <img src={fotoSrc} alt={`Foto de ${nombre}`} style={fotoStyle} />
      <div style={contenidoDerechoStyle}>
        <div style={tituloContainerStyle}>
          <h2 style={tituloStyle}>{nombre}</h2>
        </div>
        <p>
          <strong></strong> {tipo} <br />
          <strong>Costo:</strong> {costo}
        </p>
        {/* Modal */}
        <Modal isOpen={modalOpen} closeModal={closeModal} producto={producto} />
      </div>
    </div>
  );
};

const productoStyle = {
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
  fontSize: '0.9em',
};

const tituloContainerStyle = {
  textAlign: 'center',
};

const tituloStyle = {
  fontSize: '1.3em',
  color: 'black',
  fontFamily: 'inherit',
  textAlign: 'center',
};

export default Producto;
////////////////////


