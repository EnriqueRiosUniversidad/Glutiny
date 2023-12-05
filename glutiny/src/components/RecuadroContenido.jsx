import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const RecuadroContenido = ({ fotoSrc, titulo, direccion, horas, telefono }) => {
    const recuadroStyle = {
        backgroundColor: '#AEE69A',
        opacity: '0.4',
        //padding: '20px',
        padding: '10px',  
        marginBottom: '10px',

        height: '20%',
        width: '100%',

        display: 'flex',
        alignItems: 'center',
    };

    const fotoStyle = {
        width: '35%',

        height: 'auto',
        marginRight: '20px',
    };

    const contenidoDerechoStyle = {
        color: 'black',
    };

    return (
        <div style={recuadroStyle}>
            {/* Foto a la izquierda */}
            <img src={fotoSrc} alt={`Foto de ${titulo}`} style={fotoStyle} />

            {/* Contenido a la derecha */}
            <div style={contenidoDerechoStyle}>
                <h2>{titulo}</h2>
                <p>
                    <strong>Dirección:</strong> {direccion}<br />
                    <strong>Horas:</strong> {horas}<br />
                    <strong>Teléfono:</strong> {telefono}
                </p>
            </div>
        </div>
    );
};

export default RecuadroContenido;
