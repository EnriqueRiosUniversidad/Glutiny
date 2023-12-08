import React from "react";
import logoReceta from '../img/logo-recetas.png'
import Menu from "./Menu";
import Buscador from "./Buscador";
import '../estilos/receta.css'

const Recetas = () => {

    return (
        <div>
            <div className='logo'>
                <img src={logoReceta} />
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

            <Menu />
        </div>
    )
}

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