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

  // Función para eliminar las citas por medio de su ID
  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    setCitas(nuevasCitas);
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
          <h1>Citas actuales</h1>
          {citas.length == 0 ? <h1>No hay citas actualmente.</h1>
          : citas.map(cita => (
            <Citas
              key={cita.id} 
              cita={cita}
              eliminarCita={eliminarCita}
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
