import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown no-arrow mx-1">
          <button className="nav-link dropdown-toggle" id="alertsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="fas fa-bell fa-fw"></i>
            <span className="badge badge-danger badge-counter">3+</span>
          </button>
          <div className="dropdown-list dropdown-menu dropdown-menu-end shadow animated--grow-in"
            aria-labelledby="alertsDropdown">
            <h6 className="dropdown-header">
              Alerts Center
            </h6>
            <button className="dropdown-item d-flex align-items-center">
              <div className="mr-3">
                <div className="icon-circle bg-primary">
                  <i className="fas fa-file-alt text-white"></i>
                </div>
              </div>
              <div>
                <div className="small text-gray-500">December 12, 2019</div>
                <span className="font-weight-bold">A new monthly report is ready to download!</span>
              </div>
            </button>
            <button className="dropdown-item d-flex align-items-center">
              <div className="mr-3">
                <div className="icon-circle bg-success">
                  <i className="fas fa-donate text-white"></i>
                </div>
              </div>
              <div>
                <div className="small text-gray-500">December 7, 2019</div>
                $290.29 has been deposited into your account!
              </div>
            </button>
            <a className="dropdown-item d-flex align-items-center">
              <div className="mr-3">
                <div className="icon-circle bg-warning">
                  <i className="fas fa-exclamation-triangle text-white"></i>
                </div>
              </div>
              <div>
                <div className="small text-gray-500">December 2, 2019</div>
                Spending Alert: We've noticed unusually high spending for your account.
              </div>
            </a>
            <button className="dropdown-item text-center small text-gray-500">Show All Alerts</button>
          </div>
        </li>

        <li className="nav-item dropdown no-arrow mx-1">
          <button className="nav-link dropdown-toggle" id="messagesDropdown" role="button"
            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fas fa-envelope fa-fw"></i>
            <span className="badge badge-danger badge-counter">7</span>
          </button>
          <div className="dropdown-list dropdown-menu dropdown-menu-end shadow animated--grow-in"
            aria-labelledby="messagesDropdown">
            <h6 className="dropdown-header">
              Message Center
            </h6>
            <button className="dropdown-item d-flex align-items-center">
              <div className="dropdown-list-image mr-3">
                <img className="rounded-circle" src="img/undraw_profile_1.svg"
                  alt="..." />
                <div className="status-indicator bg-success"></div>
              </div>
              <div className="font-weight-bold">
                <div className="text-truncate">Hi there! I am wondering if you can help me with a
                  problem I've been having.</div>
                <div className="small text-gray-500">Emily Fowler · 58m</div>
              </div>
            </button>
            <button className="dropdown-item d-flex align-items-center">
              <div className="dropdown-list-image mr-3">
                <img className="rounded-circle" src="img/undraw_profile_2.svg"
                  alt="..." />
                <div className="status-indicator"></div>
              </div>
              <div>
                <div className="text-truncate">I have the photos that you ordered last month, how
                  would you like them sent to you?</div>
                <div className="small text-gray-500">Jae Chun · 1d</div>
              </div>
            </button>
            <button className="dropdown-item d-flex align-items-center">
              <div className="dropdown-list-image mr-3">
                <img className="rounded-circle" src="img/undraw_profile_3.svg"
                  alt="..." />
                <div className="status-indicator bg-warning"></div>
              </div>
              <div>
                <div className="text-truncate">Last month's report looks great, I am very happy with
                  the progress so far, keep up the good work!</div>
                <div className="small text-gray-500">Morgan Alvarez · 2d</div>
              </div>
            </button>
            <button className="dropdown-item d-flex align-items-center" >
              <div className="dropdown-list-image mr-3">
                <img className="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                  alt="..." />
                <div className="status-indicator bg-success"></div>
              </div>
              <div>
                <div className="text-truncate">Am I a good boy? The reason I ask is because someone
                  told me that people say this to all dogs, even if they aren't good...</div>
                <div className="small text-gray-500">Chicken the Dog · 2w</div>
              </div>
            </button>
            <button className="dropdown-item text-center small text-gray-500">Read More Messages</button>
          </div>
        </li>

        <div className="topbar-divider d-none d-sm-block"></div>

        <li className="nav-item dropdown no-arrow">
          <button className="nav-link dropdown-toggle" id="userDropdown" role="button"
            data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span className="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
            <i className="fa-solid fa-circle-user"></i>
          </button>
          <div className="dropdown-menu dropdown-menu-end shadow animated--grow-in"
            aria-labelledby="userDropdown">
            <button className="dropdown-item">
              <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
              Perfil
            </button>
            <button className="dropdown-item">
              <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
              Configuración
            </button>
            <button className="dropdown-item">
              <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
              Registro de actividades
            </button>
            <div className="dropdown-divider"></div>
            <button className="dropdown-item" data-toggle="modal" data-target="#logoutModal">
              <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
              Cerrar sesión
            </button>
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;