import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Veiculos from './pages/veiculos/Veiculos';
import Cadastro from './pages/Cadastro/Cadastro'
import Editar from './pages/Editar/Editar'

import App from './App';

function Rotas() {

  return (
    <Router>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />

        <Route path="/app" element={<App />} >
          <Route path="/app/veiculos" element={<Veiculos />} />
          <Route path='/app/editar' element={<Editar />}/>

        </Route>
      </Routes>
    </Router>
  );
}

export default Rotas;