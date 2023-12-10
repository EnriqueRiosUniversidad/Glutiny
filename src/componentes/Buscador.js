import React from 'react';
import searchImg from '../img/search.svg';


const Buscador = () => {
  return (
    <div className="row" style={{ backgroundColor: 'rgba(174, 230, 154, 0.4)' }}>
      <div className="col-12 d-flex justify-content-center align-items-center py-3">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar..."
          />
          <div className="input-group-prepend">
            <span className="input-group-text text-white" style={{ backgroundColor: 'rgba(174, 230, 154, 0.4)', height: '38px' }}>
              
              <img src={searchImg} alt="busca" style={{ width: '20px', height: '20px', marginLeft: '5px' }} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buscador;
