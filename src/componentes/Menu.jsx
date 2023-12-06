import React from 'react';
import { Link } from 'react-router-dom';
import * as pictures from '../img/pictures';

const Menu = () => {
  return (
    <div>
      <nav style={navStyle}>
        <ul style={ulStyle}>
          <li style={liStyle}>
            <Link to='/' style={linkStyle}>
              <div>
                <img
                  src={pictures.casa}
                  alt=""
                  style={{ width: '50px', height: '50px' }}
                />
                <p>Home</p>
              </div>
            </Link>
          </li>

          <li style={liStyle}>
            <Link to='/Tiendas' style={linkStyle}>
              <div>
                <img
                  src={pictures.tiendas}
                  alt=""
                  style={{ width: '50px', height: '50px' }}
                />
                <p>Tiendas</p>
              </div>
            </Link>
          </li>

          <li style={liStyle}>
            <Link to='/Restaurantes' style={linkStyle}>
              <div>
                <img
                  src={pictures.restaurantes}
                  alt=""
                  style={{ width: '50px', height: '50px' }}
                />
                <p>Restaurantes</p>
              </div>
            </Link>
          </li>

          <li style={liStyle}>
            <Link to='/Recetas' style={linkStyle}>
              <div>
                <img
                  src={pictures.recetas}
                  alt=""
                  style={{ width: '50px', height: '50px' }}
                />
                <p>Recetas</p>
              </div>
            </Link>
          </li>

          <li style={liStyle}>
            <Link to='/Maps' style={linkStyle}>
              <div>
                <img
                  src={pictures.maps}
                  alt=""
                  style={{ width: '50px', height: '50px' }}
                />
                 <p>Maps</p>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

// Estilos CSS
const navStyle = {
  backgroundColor: '#66bb6a',
  padding: '10px',
};

const ulStyle = {
  listStyle: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
  justifyContent: 'center',
};

const liStyle = {
  margin: '0 10px',
};

const linkStyle = {
  textDecoration: 'none',
  color: '#fff',
  fontSize: '18px',
};

export default Menu;