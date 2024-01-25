// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
//rutas
import Error from './routes/Error';
import Home from './routes/Home';
import Tiendas from './componentes/stores/Tienda';
import TiendaDetalle from './componentes/stores/TiendaDetalle'; // Agrega esta importación

import Mapa from './componentes/Mapa';
import Restaurante from './componentes/Restaurante';
import Recetas from './componentes/Recetas';
import RestauranteDetalle from './componentes/RestauranteDetalle'; // Agrega esta importación
import RecetaDetalle from './componentes/RecetaDetalle';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: '/Maps',
    element: <h1><Mapa/></h1>,
    errorElement: <Error />,
  },
  {
    path: '/Tiendas',
    element: <Tiendas />,
    errorElement: <Error />,
  },
  {
    path: '/tienda-detalle/:id', // Ruta con parámetro dinámico
    element: <TiendaDetalle />,
    errorElement: <Error />,
  },
  {
    path: '/Restaurantes', 
    element: <Restaurante/>,
    errorElement: <Error />,
  },
   {
    path: '/Recetas', 
    element: <Recetas/>,
    errorElement: <Error />,
  },
  {
    path: '/restaurante-detalle/:id', // Ruta con parámetro dinámico
    element: <RestauranteDetalle />,
    errorElement: <Error />,
  },
    {
    path: '/receta-detalle/:id', // Ruta con parámetro dinámico
    element: <RecetaDetalle />,
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
