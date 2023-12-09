import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, useMap, Popup, Marker } from 'react-leaflet'
import { Link } from 'react-router-dom';
import '../estilos/mapa.css'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-icon.png'
import ciudadesItapua from './ciudadesItapua.json'
import restaurantes from './restaurantes.json'
import supermercados from './supermercados.json'
import Menu from './Menu';
import logoLocalizacion from '../img/logo-localizacion.png';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa el CSS de Bootstrap

import Buscador from './Buscador';

let iconUbicacion = new L.icon({
    iconUrl: icon,
    iconShadow: iconShadow,
    iconSize: [20, 30],
    iconAnchor: [10, 70],
    shadowAnchor: [10, 70],
    popupAnchor: [-3, -76]

})

const Mapa = () => {
    const [ciudadSeleccionada, setCiudadSeleccionada] = useState(null);
    const [restauranteSeleccionado, setRestauranteSeleccionado] = useState(null);
    const [superSeleccionado, setSuperSeleccionado] = useState('');
    const [latitud, setLatitud] = useState(-23.442503);
    const [longitud, setLongitud] = useState(-58.443832);
    const filtroRestaurantes = restaurantes.filter((restaurante) => restaurante.ciudadValor === ciudadSeleccionada);
    const filtroSupermercados = supermercados.filter((supermercado) => supermercado.ciudadValor === ciudadSeleccionada);
    const [tipoSeleccionado, setTipoSeleccionado] = useState(''); // Tipo seleccionado: restaurante o supermercado

    const handleRestauranteChange = (e) => {
        const valorSeleccionado = e.target.value;

        // Encuentra el restaurante seleccionado
        const restauranteEncontrado = restaurantes.find(restaurante => restaurante.valor === valorSeleccionado);

        if (restauranteEncontrado) {
            setRestauranteSeleccionado({ valor: restauranteEncontrado.valor, link: restauranteEncontrado.link });
            setSuperSeleccionado(''); // Reiniciar la selección del supermercado
            setTipoSeleccionado('restaurante');

            // Lógica para obtener las coordenadas del restaurante seleccionado y establecer latitud y longitud
            setLatitud(restauranteEncontrado.latitud);
            setLongitud(restauranteEncontrado.longitud);
        }
    };

    const handleSupermercadoChange = (e) => {
        const valorSeleccionado = e.target.value;

        // Encuentra el supermercado seleccionado
        const supermercadoEncontrado = supermercados.find(supermercado => supermercado.valor === valorSeleccionado);

        if (supermercadoEncontrado) {
            setSuperSeleccionado({ valor: supermercadoEncontrado.valor, link: supermercadoEncontrado.link });
            setRestauranteSeleccionado(''); // Reiniciar la selección del restaurante
            setTipoSeleccionado('supermercado');

            // Lógica para obtener las coordenadas del supermercado seleccionado y establecer latitud y longitud
            setLatitud(supermercadoEncontrado.latitud);
            setLongitud(supermercadoEncontrado.longitud);
        }
    };

    useEffect(() => {
        console.log('Latitud actualizada:', latitud);
        console.log('Longitud actualizada:', longitud);
    }, [latitud, longitud]);

    const [ciudadesFiltradas, setCiudadesFiltradas] = useState([]);


    useEffect(() => {
        if (ciudadSeleccionada) {
            const ciudadesFiltradasPorNombre = ciudadesItapua.filter(ciudad =>
                ciudad.nombre.toLowerCase().includes(ciudadSeleccionada.toLowerCase())
            );
            setCiudadesFiltradas(ciudadesFiltradasPorNombre);
        } else {
            setCiudadesFiltradas([]);
        }
    }, [ciudadSeleccionada]);

  
    return (
        <div>
            <div className='logo'>
                <img src={logoLocalizacion} />
            </div>
            <Buscador />
            <div className='contenedor-selectores'>
                <select
                    value={ciudadSeleccionada}
                    onChange={(e) => setCiudadSeleccionada(e.target.value)}
                >
                    <option value="">Ciudad</option>
                    {ciudadesItapua.map((ciudad) => (
                        <option key={ciudad.valor} value={ciudad.valor}>
                            {ciudad.nombre}
                        </option>
                    ))}
                </select>

                <select
                    value={restauranteSeleccionado}
                    onChange={handleRestauranteChange}
                >
                    <option value="">Restaurante</option>
                    {filtroRestaurantes.map((restaurante) => (
                        <option key={restaurante.valor} value={restaurante.valor}>
                            {restaurante.nombre}
                        </option>
                    ))}
                </select>

                <select
                    value={superSeleccionado}
                    onChange={handleSupermercadoChange}
                >
                    <option value="">Supermercado</option>
                    {filtroSupermercados.map((supermercado) => (
                        <option key={supermercado.valor} value={supermercado.valor}>
                            {supermercado.nombre}
                        </option>
                    ))}
                </select>
            </div>
            <div className='contenedor-mapa'>
                <MapContainer center={[latitud, longitud]} zoom={5} scrollWheelZoom={false} className="mapa">
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {latitud && longitud && (
                        <Marker
                            position={[latitud, longitud]}
                            icon={iconUbicacion}
                            eventHandlers={{
                                click: () => {
                                    if (tipoSeleccionado === 'restaurante' && restauranteSeleccionado) {
                                        window.open(restauranteSeleccionado.link, '_blank');
                                    } else if (tipoSeleccionado === 'supermercado' && superSeleccionado) {
                                        window.open(superSeleccionado.link, '_blank');
                                    }
                                }
                            }}
                        >
                            <Popup>
                                {/* Contenido del Popup */}
                            </Popup>
                        </Marker>

                    )}
                </MapContainer>
            </div>
            <Menu />
        </div>
    );
}

export default Mapa;
