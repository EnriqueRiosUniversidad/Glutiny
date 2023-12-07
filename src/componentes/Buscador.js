// Buscador.js
import React from 'react';

const Buscador = () => {
  return (
    <div className="row" style={{ backgroundColor: '#AEE69A' }}>
      <div className="col-12 d-flex justify-content-center align-items-center py-3">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar..."
          />
          <div className="input-group-prepend">
            <span
              className="input-group-text text-white"
              style={{ backgroundColor: '#AEE69A' }}
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buscador;
