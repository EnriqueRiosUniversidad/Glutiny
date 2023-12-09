// datosRestaurantes.js
import * as pictures from '../img/pictures';

export const restaurantes = [
  {
    id: 1,
    fotoSrc: pictures.ajisai,
    titulo: 'ajisai',
    direccion: '6098 Jose Antonio y, Maria Roqu',
    horas: '07:00-20:30',
    tipo: 'Sin lactosa | Vegano',
    telefono: '0983 994 674',
    
  },
    
      {
        id: 2,
        fotoSrc: pictures.curcuma,
        titulo: 'Curcuma',
        direccion: '6098 Jose Antonio y, Maria Roqu',
        horas: '07:00-20:30',
        tipo: 'Celiaco | Vegano',
        telefono: '0983 994 674',
      },
      {
        id: 3,
        fotoSrc: pictures.lamafia,
        titulo: 'La Mafia',
        direccion: '6098 Jose Antonio y, Maria Roqu',
        horas: '07:00-20:30',
        tipo: 'Celiaco | Vegano',
        telefono: '0983 994 674',
      },
      {
        id: 4,
        fotoSrc: pictures.ogaucho,
        titulo: 'O-Gaucho',
        direccion: '6098 Jose Antonio y, Maria Roqu',
        horas: '07:00-20:30',
        tipo: 'Sin Lactosa',
        telefono: '0983 994 674',
      },
      {
        id: 5,
        fotoSrc: pictures.pizzahub,
        titulo: 'PizzaHub',
        direccion: '6098 Jose Antonio y, Maria Roqu',
        horas: '07:00-20:30',
        tipo: 'Celiaco | Vegano',
        telefono: '0983 994 674',
      },
      {
        id: 6,
        fotoSrc: pictures.rolandi,
        titulo: 'Rolandi',
        direccion: '6098 Jose Antonio y, Maria Roqu',
        horas: '07:00-20:30',
        tipo: 'Celiaco | Sin Lactosa',
        telefono: '0983 994 674',
      },
    ];

    //productos de los restaurantes 
    export const productos = [
      {
        id: 1,
        restauranteId: 1,
        fotoSrc: pictures.helado,
        nombre: 'Producto 1',
        tipo: 'Sin Lactosa',
        costo: '$10.00',
      },
      {
        id: 2,
        restauranteId: 1,
        fotoSrc: pictures.helado,
        nombre: 'Producto 2',
        tipo: 'Celiaco | Vegano',
        costo: '$15.00',
      },
      {
        id: 3,
        restauranteId: 1,
        fotoSrc: pictures.helado,
        nombre: 'Producto 3',
        tipo: 'Vegano',
        costo: '$15.00',
      },
      {
        id: 4,
        restauranteId: 1,
        fotoSrc: pictures.helado,
        nombre: 'Producto 4',
        tipo: 'Celiaco | Sin Lactosa',
        costo: '$15.00',
      },


      // ... más productos
    ];
    