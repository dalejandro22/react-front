import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function Sidebar({ classType, onParameterChange }) {
  const [page, setPage] = useState('main');

  const generalVal = () => page === 'main';
  const usersVal = () => page === 'users';
  const studentsVal = () => page === 'students';

  const handleParameterChange = param => {
    setPage(param);
    onParameterChange(param);
  };

  return (
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
      <a className="sidebar-brand d-flex align-items-center justify-content-center" href="#">
        <div className="sidebar-brand-icon rotate-n-15">
          <i class="fa-solid fa-screwdriver-wrench"></i>
        </div>
        <div className="sidebar-brand-text mx-3">Plataforma de Gestión</div>
      </a>
      <hr className="sidebar-divider my-0" />
      <li className={"nav-item " + (generalVal() ? 'active' : '')}>
        <button className="nav-link" href="#" onClick={() => handleParameterChange('main')}>
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Panel de control</span></button>
      </li>
      <hr className="sidebar-divider" />
      <div className="sidebar-heading">
        Usuarios
      </div>
      <li className={"nav-item " + (usersVal() ? 'active' : '')}>
        <button className="nav-link collapsed" href="#" onClick={() => handleParameterChange('users')}>
          <i className="fas fa-fw fa-cog"></i>
          <span>Gestionar usuarios</span>
        </button>
      </li>
      <hr className="sidebar-divider" />
      <div className="sidebar-heading">
        Estudiantes
      </div>
      <li className={"nav-item " + (studentsVal() ? 'active' : '')}>
        <a className="nav-link collapsed" href="/gestion/usuarios" data-toggle="collapse" data-target="#collapseTwo"
          aria-expanded="true" aria-controls="collapseTwo">
          <i className="fas fa-fw fa-cog"></i>
          <span>Gestionar estudiantes</span>
        </a>
      </li>
    </ul>
  )
}

export default Sidebar;