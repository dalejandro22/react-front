import 'bootstrap/dist/css/bootstrap.min.css';
import './LoadScreen.css';

function LoadingScreen() {
  return (
    <div id='loading_screen' className="d-flex flex-column justify-content-center align-items-center">
      <div className="spinner-border mb-3" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <h6>Cargando...</h6>
    </div>
  )
}

export default LoadingScreen;