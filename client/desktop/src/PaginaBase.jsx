import { Outlet } from 'react-router-dom'
import './PaginaBase.css'

function PaginaBase() {

  return (
    <div className="PaginaBase">
      <div>TESTE</div>
      <Outlet />
    </div>
  )
}

export default PaginaBase

  // Não editar este arquivo
