import React, { Fragment, useState } from 'react';
import Formulario from './components/Formulario';
import Citas from './components/Citas';

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
          {
            citas.map(cita => (
              <Citas
                key={cita.id} 
                cita={cita}
              />
            ))
          }
        </div>
      </div>
    </div>  
  </Fragment>
  );
}

export default App;
