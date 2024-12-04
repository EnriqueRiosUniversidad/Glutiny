
import * as pictures from '../../img/pictures';

export const tiendas = [
  {
    id: 1,
    fotoSrc: pictures.super6,
    titulo: 'super6',
    direccion: '6098 Jose Antonio y, Maria Roqu',
    horas: '07:00-20:30',
    tipo: 'Sin lactosa | Vegano',
    telefono: '0983 994 674',

  },

  {
    id: 2,
    fotoSrc: pictures.super_familia,
    titulo: 'Super Familia',
    direccion: '6098 Jose Antonio y, Maria Roqu',
    horas: '07:00-20:30',
    tipo: 'Celiaco | Vegano',
    telefono: '0983 994 674',
  },
  {
    id: 3,
    fotoSrc: pictures.Super_sanMartin,
    titulo: 'Super san Martin',
    direccion: '6098 Jose Antonio y, Maria Roqu',
    horas: '07:00-20:30',
    tipo: 'Celiaco | Vegano',
    telefono: '0983 994 674',
  },
  {
    id: 4,
    fotoSrc: pictures.cityMarket,
    titulo: 'City Market',
    direccion: '6098 Jose Antonio y, Maria Roqu',
    horas: '07:00-20:30',
    tipo: 'Celiaco | Vegano | Sin Lactosa',
    telefono: '0983 994 674',
  }
];

/*
export { default as harina_de_arroz_primicia } from './harina_de_arroz_primicia.png'; 
export { default as yogurtVegetal } from './yogurtVegetal.jpg'; 
export { default as leche } from './leche.png'; 
export { default as galletasNoglut } from './galletasNoglut.png'; 
export { default as spaghettiKnor } from './spaghettiKnor.png'; 
export { default as spaghettiGallo } from './spaghettiGallo.png'; 
export { default as galletasEcovida } from './galletasEcovida.png'; 
*/


//productos de los tiendas 
export const productos = [
  {
    id: 11,
    tiendaId: 1,
    fotoSrc: pictures.harina_de_arroz_primicia,
    nombre: 'Harina de arroz',
    tipo: 'Vegano',
    costo: '30.000Gs',
  },
  {
    id: 12,
    tiendaId: 1,
    fotoSrc: pictures.yogurtVegetal,
    nombre: 'Yoguert Vegetal',
    tipo: 'Vegano',
    costo: '15.000Gs',
  },
  {
    id: 13,
    tiendaId: 1,
    fotoSrc: pictures.spaghettiKnor,
    nombre: 'Spaghetti Knor',
    tipo: 'Vegano',
    costo: '20.000Gs',
  },
  {
    id: 14,
    tiendaId: 1,
    fotoSrc: pictures.spaghettiGallo,
    nombre: 'Spaghetti Gallo',
    tipo: 'Vegano',
    costo: '12.000Gs',
  },


  {
    id: 21,
    tiendaId: 2,
    fotoSrc: pictures.harina_de_arroz_primicia,
    nombre: 'Harina de arroz',
    tipo: 'Vegano',
    costo: '30.000Gs',
  },
  {
    id: 22,
    tiendaId: 2,
    fotoSrc: pictures.yogurtVegetal,
    nombre: 'Yoguert Vegetal',
    tipo: 'Vegano',
    costo: '15.000Gs',
  },
  
  {
    id: 23,
    tiendaId: 2,
    fotoSrc: pictures.galletasNoglut,
    nombre: 'Galletas Noglut',
    tipo: 'Celiaco | Vegano',
    costo: '12.000Gs',
  },
  {
    id: 24,
    tiendaId: 2,
    fotoSrc: pictures.galletasEcovida,
    nombre: 'Galletas Ecovida',
    tipo: 'Celiaco | Vegano',
    costo: '12.000Gs',
  },


  {
    id: 31,
    tiendaId: 3,
    fotoSrc: pictures.harina_de_arroz_primicia,
    nombre: 'Harina de arroz',
    tipo: 'Vegano',
    costo: '30.000Gs',
  },
  {
    id: 32,
    tiendaId: 3,
    fotoSrc: pictures.yogurtVegetal,
    nombre: 'Yoguert Vegetal',
    tipo: 'Vegano',
    costo: '11.000Gs',
  },
  
  {
    id: 33,
    tiendaId: 3,
    fotoSrc: pictures.galletasNoglut,
    nombre: 'Galletas Noglut',
    tipo: 'Celiaco | Vegano',
    costo: '17.000Gs',
  },
  {
    id: 34,
    tiendaId: 3,
    fotoSrc: pictures.galletasEcovida,
    nombre: 'Galletas Ecovida',
    tipo: 'Celiaco | Vegano',
    costo: '12.000Gs',
  },

  {
    id: 41,
    tiendaId: 4,
    fotoSrc: pictures.harina_de_arroz_primicia,
    nombre: 'Harina de arroz',
    tipo: 'Vegano',
    costo: '30.000Gs',
  },
  {
    id: 42,
    tiendaId: 4,
    fotoSrc: pictures.yogurtVegetal,
    nombre: 'Yoguert Vegetal',
    tipo: 'Vegano',
    costo: '11.000Gs',
  },
  
  {
    id: 43,
    tiendaId: 4,
    fotoSrc: pictures.galletasNoglut,
    nombre: 'Galletas Noglut',
    tipo: 'Celiaco | Vegano',
    costo: '17.000Gs',
  },
  {
    id: 44,
    tiendaId: 4,
    fotoSrc: pictures.galletasEcovida,
    nombre: 'Galletas Ecovida',
    tipo: 'Celiaco | Vegano',
    costo: '12.000Gs',
  },
  {
    id: 45,
    tiendaId: 4,
    fotoSrc: pictures.spaghettiKnor,
    nombre: 'Spaghetti Knor',
    tipo: 'Vegano',
    costo: '20.000Gs',
  },
  {
    id: 46,
    tiendaId: 4,
    fotoSrc: pictures.spaghettiGallo,
    nombre: 'Spaghetti Gallo',
    tipo: 'Vegano',
    costo: '12.000Gs',
  },
  {
    id: 47,
    tiendaId: 4,
    fotoSrc: pictures.leche,
    nombre: 'Leche sin lactosa',
    tipo: 'Celiaco | Sin Lactosa',
    costo: '12.000Gs',
  },
  
];
