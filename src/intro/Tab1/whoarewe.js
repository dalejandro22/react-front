import Instituto from './instituto.png';

function WhoRW() {
  return (
    <div className="p-3 container">
      <h3 className="text-center">¿Quiénes somos?</h3>
      <br/>
      <div className='d-flex gap-5'>
        <div>
          <img src={Instituto} alt='Institución Educativa Divino Niño'/>
        </div>
        <div>
          <p>
            La Institución Educativa Divino Niño fue fundada en 1996, especializándose en la formación de los líderes que nuestro país necesita, para tener un próspero mañana. Hoy en día, las aplicaciones y resultados de nuestro modelo de educación aprendizaje significativo, nos sitúa entre las instituciones más prestigiosas de la región. Nuestro propósito es formar líderes útiles para nuestra sociedad. Teniendo en cuenta los mapas de vulnerabilidad, riesgo y oportinidad (MVRO), Institución Educativa Divino Niño se fundamenta en los lineamientos del modelo educativo "Juventud Rural, Educación y Desarrollo Rural".
          </p>
        </div>
      </div>
      <br/>
      <iframe title='Ubicación' className='w-100' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.547898576038!2d-76.5153446886964!3d3.4594482965004714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a7ca515e6f23%3A0xf1f6c7d329ac482d!2sVidrios%20J.C!5e0!3m2!1ses!2sco!4v1710097705984!5m2!1ses!2sco" style={{border: 0, height: "20rem"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
    </div>
  );
}

export default WhoRW;