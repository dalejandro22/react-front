import '@fortawesome/fontawesome-free/css/all.min.css';
import LoadingScreen from '../loading/LoadScreen.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { useState, useEffect } from 'react';
import NavbarGestion from '../gestion/Navbar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '../sidebar/Sidebar.js';
import Modal from 'react-bootstrap/Modal';
import './Usuarios.css';

function Usuarios() {
  const [idUsuario, setIdUsuario] = useState([]);
  const [refresh, setRefresh] = useState(true);
  const [users, setUsers] = useState(null);

  const [user_createShow, setUser_createShow] = useState(false);
  const user_createClose = () => setUser_createShow(false);
  const user_createShowHandle = () => { setUser_createShow(true) }

  const [user_editShow, setUser_editShow] = useState(false);
  const user_editClose = () => setUser_editShow(false);
  const user_editShowHandle = (idUser) => {
    setIdUsuario(idUser);
    setUser_editShow(true);
  }

  const [user_deleteShow, setUser_deleteShow] = useState(false);
  const user_deleteClose = () => setUser_deleteShow(false);
  const user_deleteShowHandle = (idUser) => {
    setIdUsuario(idUser);
    setUser_deleteShow(true);
  }

  useEffect(() => {
    if (refresh) {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:5000/read-users');

          if (!response.ok) {
            throw new Error('No se pudo obtener los datos.');
          }

          const data = await response.json();
          setUsers(data);
        } catch (error) {
          throw new Error(error.message);
        }
      };

      fetchData();
      setRefresh(false);
    }
  }, [refresh]);

  const [createEffect, setCreateEffect] = useState(false);

  useEffect(() => {
    if (createEffect) {
      const tipo = document.getElementById('userC_TIPO');

      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:5000/create-user', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              "TIPO": tipo.options[tipo.selectedIndex].text,
              "NOMBRE": document.getElementById('userC_NOMBRE').value,
              "AUTH": document.getElementById('userC_AUTH').value
            })
          });

          if (!response.ok) {
            throw new Error('No se pudo obtener los datos.');
          }

          user_createClose();
          setRefresh(true);
        } catch (error) {
          throw new Error(error.message);
        }
      };

      fetchData();
      setCreateEffect(false);
    }
  }, [createEffect]);

  const createAction = () => { setCreateEffect(true) };

  const [editEffect, setEditEffect] = useState(false);

  useEffect(() => {
    if (editEffect) {
      const tipo = document.getElementById('userU_TIPO');

      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:5000/update-user', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              "TIPO": tipo.options[tipo.selectedIndex].text,
              "NOMBRE": document.getElementById('userU_NOMBRE').value,
              "AUTH": document.getElementById('userU_AUTH').value,
              "ID_USUARIO": idUsuario.ID_USUARIO
            })
          });

          if (!response.ok) {
            throw new Error('No se pudo obtener los datos.');
          }

          user_editClose();
          setRefresh(true);
        } catch (error) {
          throw new Error(error.message);
        }
      };

      fetchData();
      setEditEffect(false);
    }
  }, [editEffect]);

  const editAction = () => { setEditEffect(true) };

  const [deleteEffect, setDeleteEffect] = useState(false);

  useEffect(() => {
    if (deleteEffect) {
      const fetchData = async () => {
        try {
          const response = await fetch('http://localhost:5000/delete-user', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              "ID_USUARIO": idUsuario.ID_USUARIO
            })
          });

          if (!response.ok) {
            throw new Error('No se pudo obtener los datos.');
          }

          user_deleteClose();
          setRefresh(true);
        } catch (error) {
          throw new Error(error.message);
        }
      };

      fetchData();
      setDeleteEffect(false);
    }
  }, [deleteEffect]);

  const deleteAction = () => { setDeleteEffect(true) };

  if (!users) {
    return <LoadingScreen />
  }

  return (
    <>
      <div id="wrapper">
        <Sidebar classType='users' />
        <div id='content-wrapper' className='d-flex flex-column'>
          <div id="content">
            <NavbarGestion />
            <div className='container-fluid mb-4'>
              <div class="d-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Gestionar usuarios</h1>
                <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                  <i class="fas fa-download fa-sm text-white-50"></i> Generar reporte (próximamente)
                </a>
              </div>
              <div className='card border-left-primary shadow-sm mb-4'>
                <div className='card-header'>
                  <h6 className='m-0 font-weight-bold text-primary'>Información</h6>
                </div>
                <div className='card-body'>
                  Aquí podrás gestionar todos los usuarios de la aplicación
                </div>
              </div>
              <div className='card border-left-success shadow-sm'>
                <div className='card-header'>
                  <h6 className='m-0 font-weight-bold text-success'>Usuarios</h6>
                </div>
                <div className='card-body'>
                  <button className='btn btn-success mb-3' onClick={user_createShowHandle}><i class="fa-solid fa-plus"></i> Añadir usuario</button>
                  <table className='table table-striped table-bordered'>
                    <thead>
                      <tr className='text-center'>
                        {Object.keys(users[0]).map((key, index) => (
                          key === 'ID_USUARIO' ? '' :
                            <th key={index}>{key}</th>
                        ))}
                        <th key='comando'>COMANDOS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((dato, index) => (
                        dato.ID_USUARIO === '' ? '' :
                          <tr key={index}>
                            {Object.values(dato).map((value, indexObj) => (
                              indexObj === 0 ? '' : value === undefined ?
                                <td className='align-middle' key={indexObj}></td>
                                :
                                <td className='align-middle' key={indexObj}>{value}</td>
                            ))}
                            <td className='d-flex justify-content-center align-items-center'>
                              <button className='btn btn-sm btn-primary me-2' onClick={() => { user_editShowHandle(dato) }}><i class="fa-solid fa-pencil"></i></button>
                              <button className='btn btn-sm btn-danger' onClick={() => { user_deleteShowHandle(dato) }}><i class="fa-solid fa-eraser"></i></button>
                            </td>
                          </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={user_createShow} onHide={user_createClose}>
        <Modal.Header closeButton>
          <Modal.Title>Añadir usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {Object.entries(users[0]).map(([key, value]) => (
            key === 'ID_USUARIO' ? '' : key === 'TIPO' ?
              <div key={key} className='mb-2'>
                <label className='fw-bold' htmlFor={'user_C' + key}>{key}</label>
                <select id={'userC_' + key} className='form-select'>
                  <option value="1">ADMIN</option>
                  <option value="2">ESTUDIANTE</option>
                  <option value="3">DOCENTE</option>
                  <option value="4">ACUDIENTE</option>
                </select>
              </div>
              :
              <div key={key} className='mb-2'>
                <label className='fw-bold' htmlFor={'userC_' + key}>{key}</label>
                <input className='form-control' id={'userC_' + key} type='text' />
              </div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <button className='btn btn-success' onClick={createAction}>Crear</button>
          <button className='btn btn-danger' onClick={user_createClose}>Descartar</button>
        </Modal.Footer>
      </Modal>
      <Modal show={user_editShow} onHide={user_editClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {Object.entries(idUsuario).map(([key, value]) => (
            key === 'ID_USUARIO' ? '' : key === 'TIPO' ?
              <div key={key} className='mb-2'>
                <label className='fw-bold' htmlFor={'user_U' + key}>{key}</label>
                <select id={'userU_' + key} className='form-select'>
                  <option value="1">ADMIN</option>
                  <option value="2">ESTUDIANTE</option>
                  <option value="3">DOCENTE</option>
                  <option value="4">ACUDIENTE</option>
                </select>
              </div>
              :
              <div key={key} className='mb-2'>
                <label className='fw-bold' htmlFor={'userU_' + key}>{key}</label>
                <input className='form-control' id={'userU_' + key} type='text' defaultValue={value} />
              </div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <button className='btn btn-primary' onClick={editAction}>Actualizar</button>
          <button className='btn btn-danger' onClick={user_editClose}>Descartar</button>
        </Modal.Footer>
      </Modal>
      <Modal show={user_deleteShow} onHide={user_deleteClose}>
        <Modal.Header closeButton>
          <Modal.Title>Eliminar usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className='m-0'>{`¿Seguro desea eliminar el usuario ${idUsuario.NOMBRE}?`}</p>
        </Modal.Body>
        <Modal.Footer>
          <button className='btn btn-danger' onClick={deleteAction}>Eliminar</button>
          <button className='btn btn-primary' onClick={user_deleteClose}>Cancelar</button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Usuarios;