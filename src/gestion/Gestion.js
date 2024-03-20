import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../sidebar/Sidebar.js';
import NavbarGestion from './Navbar.js';
import Principal from './Principal.js';
import Usuarios from './Usuarios.js';
import { useState } from 'react';
import './Gestion.css';

function Gestion() {
  const [page, setPage] = useState('main');

  return (
    <div id="wrapper">
      <Sidebar classType='main' onParameterChange={(param) => setPage(param)}/>
      <div id='content-wrapper' className='d-flex flex-column'>
        <div id="content">
          <NavbarGestion/>
          {page === 'main' ? <Principal/> :
          page === 'users' ? <Usuarios/> : ''
          }
        </div>
      </div>
    </div>
  )
}

export default Gestion;