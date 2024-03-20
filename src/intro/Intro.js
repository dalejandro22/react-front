import 'bootstrap/dist/css/bootstrap.min.css';
import SchoolIcon from './school-icon.svg';
import OfertaIcon from './oferta-icon.svg';
import Navegacion from '../navbar/Nav.js';
import Footer from '../footer/Footer.js';
import NormaIcon from './norma-icon.svg';
import WhoRW from './Tab1/whoarewe.js';
import { useState } from 'react';
import './Intro.css';

function Intro() {
  const [activeTab, setActiveTag] = useState("Tab1");

  const institucion = "Institución Educativa Divino Niño";

  const limpiarCampos = () => {
    document.getElementById('contactanos').reset();
  }

  return (
    <>
      <Navegacion/>
      <section className='introduccion d-flex justify-content-center'>
        <div className='introduccion__fondo w-100 p-5 row row-gap-4'>
          <div className='col-xl-7 col-lg-12 col-md-12 col-sm-12 m-auto'>
            <p className='introduccion__titulo display-2 fw-bold text-white text-center'>
              {institucion}
            </p>
            <br/>
            <p className='fs-4 text-white text-start'>
              Bienvenidos a la {institucion}, un faro de excelencia, innovación y compromiso con el desarrollo humano y social. Fundada con una visión audaz y una misión arraigada en el servicio a la comunidad, nuestra institución se erige como un bastión de aprendizaje, crecimiento personal y contribución al bienestar colectivo.
            </p>
          </div>
          <div className='col-xl-4 col-lg-8 col-md-8 col-sm-8 m-auto'>
            <form id='contactanos' className='bg-white rounded-2 p-5'>
              <h4>¿Dudas? Contáctanos...</h4>
              <br/>
              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre completo</label>
                <input type="text" className="form-control text-capitalize" id="nombre" placeholder="Bernando Gómez"/>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Correo electrónico</label>
                <input type="email" className="form-control" id="email" placeholder="bernando.gomez@hotmail.com"/>
              </div>
              <div className="mb-3">
                <label htmlFor="mensaje" className="form-label">Mensaje</label>
                <textarea style={{resize: "none"}} className="form-control" id="mensaje" rows="5" maxLength="100"></textarea>
              </div>
              <div className='d-flex justify-content-between gap-3'>
                <button className='btn btn-success w-50'>Enviar mensaje</button>
                <button className='btn btn-danger w-50' onClick={limpiarCampos}>Limpiar campos</button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section>
        <div className='row opcion_icono gx-0'>
          <div id="tab-1" className='col d-flex flex-column justify-content-center align-items-center gap-2 border-end py-4' onClick={() => setActiveTag('Tab1')}>
            <img src={SchoolIcon} className='img-fluid' alt='School Icon'/>
            <p className='m-0'>¿Quiénes somos?</p>
          </div>
          <div className='col d-flex flex-column justify-content-center align-items-center gap-2 border-end py-4' onClick={() => setActiveTag('Tab2')}>
            <img src={OfertaIcon} className='img-fluid' alt='Oferta Icon'/>
            <p className='m-0'>Oferta Educativa</p>
          </div>
          <div className='col d-flex flex-column justify-content-center align-items-center gap-2 py-4' onClick={() => setActiveTag('Tab3')}>
            <img src={NormaIcon} className='img-fluid' alt='School Icon'/>
            <p className='m-0'>Normatividad</p>
          </div>
        </div>
      </section>
      <section className='seleccion'>
        {
          (() => {
            switch (activeTab) {
              case 'Tab1': {
                return <WhoRW/>;
              }
              default:
            };
          })()
        }
      </section>
      <Footer/>
    </>
  );
}

export default Intro;
