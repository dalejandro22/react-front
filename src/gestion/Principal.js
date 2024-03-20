function Principal() {
  return (
    <div className='container-fluid'>
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Panel de control</h1>
        <button className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
          <i className="fas fa-download fa-sm text-white-50"></i> Generar reporte (próximamente)
        </button>
      </div>
      <div className='card border-left-primary shadow-sm'>
        <div className='card-header'>
          <h6 className='m-0 font-weight-bold text-primary'>Información</h6>
        </div>
        <div className='card-body'>
          Aquí podrás gestionar todos los parámetros de la aplicación
        </div>
      </div>
    </div>
  );
}

export default Principal;