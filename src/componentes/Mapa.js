import React, { useState } from 'react';
import { MapContainer, TileLayer, useMap, Popup, Marker } from 'react-leaflet'
import '../estilos/mapa.css'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-icon.png'
import ciudadesItapua from './ciudadesItapua.json'
import restaurantes from './restaurantes.json'
import supermercados from './supermercados.json'

let iconUbicacion = new L.icon({
    iconUrl: icon,
    iconShadow: iconShadow,
    iconSize: [50, 40],
    iconAnchor: [10, 70],
    shadowAnchor: [10, 70],
    popupAnchor: [-3, -76]

})

const Mapa = () => {
    const [ciudadSeleccionada, setCiudadSeleccionada] = useState('');
    const [restauranteSeleccionado, setRestauranteSeleccionado] = useState('');
    const [superSeleccionado, setSuperSeleccionado] = useState('');

    const filtroRestaurantes = restaurantes.filter((restaurante)=> restaurante.ciudadValor===ciudadSeleccionada)
    const filtroSupermercados = supermercados.filter((supermercado)=> supermercado.ciudadValor===ciudadSeleccionada)

    //const longitudSupermercado = supermercados.filter((supermercado) => supermercado.valor === superSeleccionado)[0];
    //const latitudSupermercado ;
    return (
        <div>
            <select
                value={ciudadSeleccionada}
                onChange={(e) => setCiudadSeleccionada(e.target.value)}
                style={{width:'95px'}}
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
                onChange={(e)=> setRestauranteSeleccionado(e.target.value)}
                style={{width:'95px', marginLeft:'2px'}}
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
                onChange={(e)=> setSuperSeleccionado(e.target.value)}
                style={{width:'110px',marginLeft:'2px'}}
            >
                <option value="">Supermercado</option>
                {filtroSupermercados.map((supermercado) => (
                    <option key={supermercado.valor} value={supermercado.valor}>
                        {supermercado.nombre}
                    </option>
                ))}
            </select>

            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} className="mapa">
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]} icon={iconUbicacion}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}
export default Mapa;