import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import Menu from '../componentes/Menu';
import inicio from '../img/inicio.JPG';



export default function Home() {

  return (
    <div className="text-center">

      <div>
        <img src={inicio} style={{backgroundSize:'cover'}}/>
      </div>
      <Menu />
    </div>
  );
}










