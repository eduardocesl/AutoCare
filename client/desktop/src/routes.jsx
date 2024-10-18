import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Motoristas from './pages/motoristas/Motoristas';
import Veiculos from './pages/veiculos/Veiculos';
import Perfil from './pages/perfil/Perfil';
import PaginaBase from './PaginaBase';



function Rotas () {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaBase />} >

          <Route path="/motoristas" element={<Motoristas />} />
          <Route path="/veiculos" element={<Veiculos />} />
          <Route path="/perfil" element={<Perfil />} />
          
        </Route>
      </Routes>
    </Router>
  );
}

export default Rotas;