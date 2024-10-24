import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Motoristas from './pages/motoristas/Motoristas';
import Veiculos from './pages/veiculos/Veiculos';
import Perfil from './pages/perfil/Perfil';
import Cadastro from './pages/Cadastro/Cadastro'
import Editar from './pages/Editar/Editar'

import App from './App';

function Rotas() {

  return (
    <Router>
      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />

        <Route path="/" element={<App />} >
          <Route path="/motoristas" element={<Motoristas />} />
          <Route path="/veiculos" element={<Veiculos />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path='/editar' element={<Editar />}/>

        </Route>
      </Routes>
    </Router>
  );
}

export default Rotas;