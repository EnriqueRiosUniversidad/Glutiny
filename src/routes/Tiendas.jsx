import React from 'react';
import Menu from '../componentes/Menu';
import * as pictures from '../img/pictures';
import CuerpoTiendas from '../componentes/CuerpoTiendas'

const Tiendas = () => {
  return (
    <div>
   
      <div className="container-fluid">
        <div className="row bg-white">
          <div className="col-12 py-3">
            <img
              src={pictures.logo}
              alt="Logo de tu empresa"
              className="logo"
              style={{ width: '150px', height: '50px' }}
            />
          </div>
        </div>

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
                >
                  
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="row bg-success">
          <div className="col-12 mt-3 mb-2">
            <div className="btn-group d-flex justify-content-around">
              <button type="button" className="btn btn-success">
                Veganos
              </button>
              <button type="button" className="btn btn-success">
                Celiacos
              </button>
              <button type="button" className="btn btn-success">
                Sin Lactosa
              </button>
            </div>
          </div>
        </div>

        <CuerpoTiendas />
      </div>

      <Menu />
    </div>
  );
};

export default Tiendas;
