import React from 'react';

function Navbar() {
  return (
    <nav className="app-navbar">
      <ul>
        <li><a href="/">Dashboard</a></li>
        <li><a href="/vehicles">Veículos</a></li>
        <li><a href="/profile">Perfil do Usuário</a></li>
        <li><a href="/settings">Configurações</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
