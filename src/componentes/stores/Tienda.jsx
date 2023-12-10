// Tienda.jsx
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from '../Menu';
import CuerpoTiendas from './CuerpoTiendas';

import Buscador from '../Buscador';
import * as pictures from '../../img/pictures';

const Tienda = () => {
  const [filtroTipo, setFiltroTipo] = useState(null);

  const handleFiltroClick = (tipo) => {
    setFiltroTipo(tipo);
  };

  return (
    <div>
      <div className="container-fluid">
        <div
          className="row"
          style={{
            position: 'sticky',
            top: '0px',
            zIndex: 1000,
            background: '#fff',
            padding: '0px',
            marginBottom: '0',
            marginTop: '0', // Asegura que no haya espacio en la parte inferior
          }}
        >
          <div
            className="col-12 py-3"
            style={{ position: 'sticky', top: 0, zIndex: 1000, background: '#fff', marginBottom: '0',marginTop: '0', }}
          >
            <img
              src={pictures.logo}
              alt="Logo de tu empresa"
              className="logo"
              style={{ width: '150px', height: '50px', marginTop: '0',padding:'0px' }}
            />
          </div>
          <Buscador />
          {/* Botones de filtro */}
          <div className="col-12 mt-3 mb-2" style={contenedorSelectores}>
            <button
              type="button"
              className="btn btn-success"
              style={{ ...selectorStyle, background: 'rgba(174, 230, 154, 0.4)' }}
              onClick={() => handleFiltroClick('Vegano')}
            >
              Veganos
            </button>
            <button
              type="button"
              className="btn btn-success"
              style={{ ...selectorStyle, background: 'rgba(174, 230, 154, 0.4)' }}
              onClick={() => handleFiltroClick('Celiaco')}
            >
              Celiacos
            </button>
            <button
              type="button"
              className="btn btn-success"
              style={{ ...selectorStyle, background: 'rgba(174, 230, 154, 0.4)' }}
              onClick={() => handleFiltroClick('Sin Lactosa')}
            >
              Sin Lactosa
            </button>
          </div>
        </div>
        <CuerpoTiendas filtroTipo={filtroTipo} />
      </div>

      <Menu />
    </div>
  );
};

// Estilos CSS
const contenedorSelectores = {
  display: 'flex',
  marginTop: '0px',
  marginBottom: '0px',
  
};

const selectorStyle = {
  flex: 1,
  marginRight: '7px',
  color: '#000',
  fontSize: '95%',
  border: 'none',
  borderRadius: '5px',
};

export default Tienda;
