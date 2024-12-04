
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Menu';
import CuerpoReceta from './CuerpoRecetas';
import RestauranteDetalle from './RestauranteDetalle';
import Buscador from './Buscador';
import * as pictures from '../img/pictures';

const Recetas = () => {
  const [filtroTipo, setFiltroTipo] = useState(null);
 
  const handleFiltroClick = (tipo) => {
    setFiltroTipo(tipo);
  };



  return (
    <div>
      <div className="container-fluid">
        <div className="row bg-white">
          <div className="col-12 py-3">
            <img
              src={pictures.logoReceta}
              alt="Logo de tu empresa"
              className="logo"
              style={{ width: '190px', height: '50px' }}
            />
          </div>
        </div>
        <Buscador/>
        {/* Botones de filtro */}
        <div className="row" style={contenedorBotones}>
          <div className="col-12 mt-3 mb-2" style={contenedorSelectores}>
            <button
              type="button"
              className="btn btn-success"
              style={selectorStyle}
              onClick={() => handleFiltroClick('Vegano')}
            >
              Veganos
            </button>
            <button
              type="button"
              className="btn btn-success"
              style={selectorStyle}
              onClick={() => handleFiltroClick('Celiaco')}
            >
              Celiacos
            </button>
            <button
              type="button"
              className="btn btn-success"
              style={selectorStyle}
              onClick={() => handleFiltroClick('Sin Lactosa')}
            >
              Sin Lactosa
            </button>
          </div>
        </div>
        
        <CuerpoReceta filtroTipo={filtroTipo}  />
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

export default Recetas;
