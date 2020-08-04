import React, { Fragment, useState } from 'react';
import Formulario from './components/Formulario';

function App() {
  // State para la base de datos de citas
  const [citas, setCitas] = useState([]);

  // Función que toma las citas
  const crearCita = cita => {
    setCitas([
      ...citas, cita
    ]);
  }

  return (
  <Fragment>
    <h1>Administrador de pacientes</h1>
    <div className="container">
      <div className="row">
        <div className="one-half column">
          <Formulario 
            crearCita={crearCita}
          />
        </div>
        <div className="one-half column">
          si muy pinxe gallo
        </div>
      </div>
    </div>  
  </Fragment>
  );
}

export default App;
