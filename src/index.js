// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
//rutas
import Error from './routes/Error';
import Home from './routes/Home';
import Tiendas from './routes/Tiendas';
import Mapa from './componentes/Mapa';
import Restaurante from './componentes/Restaurante';
import RestauranteDetalle from './componentes/RestauranteDetalle'; // Agrega esta importación

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
    path: '/Restaurantes', 
    element: <Restaurante/>,
    errorElement: <Error />,
  },
  {
    path: '/Recetas', 
    element: <h1>Recetas</h1>,
    errorElement: <Error />,
  },
  {
    path: '/restaurante-detalle/:id', // Ruta con parámetro dinámico
    element: <RestauranteDetalle />,
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
