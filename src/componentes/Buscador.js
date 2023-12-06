import React, { useState } from 'react';
import '../estilos/buscador.css';

const Buscador = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    // Llamar a la función de búsqueda proporcionada por el componente padre
    onSearch(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar..."
        value={query}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Buscador;
