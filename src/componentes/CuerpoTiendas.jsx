import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecuadroContenido from './RecuadroContenido';
import * as pictures from '../img/pictures';
export default function CuerpoTiendas() {
    return (
        <div className="row">
            <div className="col-12 mt-3">
                <div className="scrollable-content">

                    <RecuadroContenido
                        fotoSrc={pictures.super6}
                        titulo="Super 6"
                        direccion="6098 Jose Antonio y, Maria roqu"
                        horas="07:00- 20:30"
                        tipo="Celiaco | Vegano "
                        telefono="0983 994 674"
                    />

                    <RecuadroContenido
                        fotoSrc={pictures.super6}
                        titulo="Super 6"
                        direccion="6098 Jose Antonio y, Maria roqu"
                        horas="07:00- 20:30"
                        tipo="Celiaco | Vegano "
                        telefono="0983 994 674"
                    />

                    <RecuadroContenido
                        fotoSrc={pictures.super6}
                        titulo="Super 6"
                        direccion="6098 Jose Antonio y, Maria roqu"
                        horas="07:00- 20:30"
                        tipo="Sin Lactosa "
                        telefono="0983 994 674"
                    />

            
                </div>
            </div>
        </div>
    );
}
