import React from 'react';
import Menu from '../componentes/Menu';
import * as pictures from '../img/pictures';
import CuerpoTiendas from '../componentes/CuerpoTiendas';
import Buscador from '../componentes/Buscador';

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
        <Buscador />

        <div className="row" style={contenedorBotones}>
          <div className="col-12 mt-3 mb-2" style={contenedorSelectores}>
            <button type="button" className="btn btn-success" style={selectorStyle}>
              Veganos
            </button>
            <button type="button" className="btn btn-success" style={selectorStyle}>
              Celiacos
            </button>
            <button type="button" className="btn btn-success" style={selectorStyle}>
              Sin Lactosa
            </button>
          </div>
        </div>

        <CuerpoTiendas />
      </div>

      <Menu />
    </div>
  );
};

// Estilos CSS
const contenedorSelectores = {
  display: 'flex',
  marginTop: '10px',
  marginBottom: '10px',
};

const selectorStyle = {
  flex: 1,
  marginRight: '7px',
  
  backgroundColor: 'rgba(174, 230, 154, 0.4)',
  color: '#000',
  fontSize: '95%', 
  border: 'none', 
  borderRadius: '5px', 
};

const contenedorBotones = {
  backgroundColor: '#fff',
  padding: '0px',
  borderRadius: '5px', 
};

export default Tiendas;
