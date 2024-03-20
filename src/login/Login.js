import LoadingScreen from '../loading/LoadScreen.js';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { useNavigate } from 'react-router-dom';
import { useValidateToken } from '../token.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'sweetalert2/dist/sweetalert2.css';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import logo from '../logo.svg';
import './Login.css';

function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let navigate = useNavigate();

  const routeChange = msg =>{
    const tipo = msg.TIPO;

    switch (tipo) {
      case 'ADMIN':
        navigate('/gestion');
    }
  }

  const submit_action = (e) => {
    e.preventDefault();
    
    const username = document.getElementById("user").value;
    const password = document.getElementById("password").value;
    const rememberMe = document.getElementById("flexCheckDefault").checked;

    new Promise((resolve, reject) => {
      fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          nombre: username,
          auth: password,
          token: rememberMe
        }),
      })
        .then(response => response.json())
        .then(responseJson => {
          if (responseJson.Estado === 'FALLIDO') {
            let timerInterval;

            Swal.fire({
              icon: "error",
              title: "¡Datos incorrectos!",
              text: "Por favor revisa nuevamente el usuario y/o contraseña ingresados",
              timer: 3000,
              timerProgressBar: true,
              showConfirmButton: false,
              willClose: () => {
                clearInterval(timerInterval);
              }
            });
          } else {
            if (rememberMe) {
              localStorage.setItem('iedvToken', responseJson.Mensaje.Token);
            } else {
              sessionStorage.setItem('iedvToken', responseJson.Mensaje.Token);
            }

            routeChange(responseJson.Mensaje);
          }
        })
        .catch(error => {
          Swal.fire({
            icon: "error",
            title: "¡Error de conexión!",
            text: "Por favor verifica tu conexión a Internet o contacta al administrador de la base de datos"
          });
        });
      });
  }

  const token = useValidateToken();

  if (token.Estado === 'OK') {
    routeChange({TIPO: token.Mensaje.TIPO});
  }

  if (Object.keys(token).length === 0) {
    return <LoadingScreen/>
  }

  return (
    <div className='login_div'>
      <section className='container'>
        <div className='d-flex justify-content-center'>
          <div className='bg-white p-5 rounded-3'>
            <div className='text-center'>
              <img src={logo} alt='Logo' width='50px'></img>
            </div>
            
            <h4 className='fw-bold text-center py-5'>¡Bienvenido/a!</h4>

            <form className='text-start' method='#' onSubmit={submit_action}>
              <div className="mb-3">
                <label htmlFor="user" className="form-label">Nombre de usuario</label>
                <input type="text" className="form-control" id="user" required/>
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Contraseña</label>
                <input type="password" className="form-control" id="password" required/>
              </div>
              <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label className="form-check-label" htmlFor="flexCheckDefault">Recuerdame</label>
              </div>
              <div className='d-grid mb-3'>
                <button type='submit' className='btn btn-outline-primary w-100 me-2'>Ingresar</button>
              </div>
              <div className='d-flex'>
                <p>¿Olvidaste tu contraseña? <a className='recuperar_auth' onClick={handleShow}>Recupérala ahora</a></p>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Recuperar contraseña</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p style={{textAlign: "justify"}}><b>1.</b> Escribe tu correo electrónico y presiona el botón <span className="badge text-bg-success">Enviar código</span> para que te sea enviado un código de 6 dígitos y poder recuperar tu cuenta.</p>
          <label htmlFor="email" className="form-label">Correo electrónico</label>
          <div className='row mb-3'>
            <div className="col-7">
              <input type="text" className="form-control w-100" id="email"/>
            </div>
            <div className="col">
              <button type="submit" className="btn btn-success w-100">Enviar código</button>
            </div>
          </div>
          <p style={{textAlign: "justify"}}><b>2.</b> Posteriormente, ingresa el código que recibiste en tu correo electrónico con la nueva contraseña que quieres para tu cuenta y presiona el botón <span className="badge text-bg-primary">Confirmar identidad</span> para que te sea enviado un código de 6 dígitos y poder recuperar tu cuenta.</p>
          <div className='mb-3'>
            <label htmlFor="auth" className="form-label">Nueva contraseña</label>
            <input type="password" className="form-control w-100" id="auth"/>
          </div>
          <div className='mb-3'>
            <label htmlFor="auth_repeat" className="form-label">Repetir nueva contraseña</label>
            <input type="password" className="form-control w-100" id="auth_repeat"/>
          </div>
          <label htmlFor="codigo_recuperacion" className="form-label">Codigo de recuperación</label>
          <div className='row mb-3'>
            <div className="col-7">
              <input type="text" className="form-control w-100 text-uppercase" maxLength={6} id="codigo_recuperacion"/>
            </div>
            <div className="col">
              <button type="submit" className="btn btn-primary w-100">Confirmar identidad</button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default App;
