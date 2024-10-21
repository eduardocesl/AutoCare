import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Cadastro from './pages/Cadastro/Cadastro'
import EditarUsuario from './pages/EditarUsuario/EditarUsuario'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cadastro/>}/>
        <Route path="/editar-usuario" element={<EditarUsuario/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
