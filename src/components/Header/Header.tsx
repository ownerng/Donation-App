// src/components/Header.tsx
import React from 'react';
import { Link, useLocation } from 'react-router';

const Header: React.FC = () => {
  const location = useLocation();

  const linkClass = (path: string) =>
    `px-4 py-2 rounded ${
      location.pathname === path ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
    }`;

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex space-x-4">
        <Link to="/show-counter" className={linkClass('/show-counter')}>
          Mostrar Contador
        </Link>
        <Link to="/data-counter" className={linkClass('/data-counter')}>
          Ingresar Donación
        </Link>
      </div>
    </nav>
  );
};

export default Header;
