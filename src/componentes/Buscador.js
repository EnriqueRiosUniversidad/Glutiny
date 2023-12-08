// Buscador.js
import React from 'react';
import '../estilos/buscador.css'
import iconBuscar from '../img/search.svg'

const Buscador = () => {
  return (
    <div className='contenedor-buscador'>
      <div className="row" >
        <div className="col-9 d-flex justify-content-center align-items-center py-2">

          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Buscar..."
            />
            <div className="input-group-prepend btn-icon">
              <span class="input-group-text" id="basic-addon1"><img src={iconBuscar} className='img-icon' /></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buscador;
