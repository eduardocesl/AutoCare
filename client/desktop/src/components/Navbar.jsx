import React from 'react';

function Navbar() {
  return (
    <nav className="app-navbar">
      <ul>
        <li><a href="/">Dashboard</a></li>
        <li><a href="/veiculos">Veículos</a></li>
        <li><a href="/editar">Perfil do Usuário</a></li>
        <li><a href="/settings">Configurações</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
