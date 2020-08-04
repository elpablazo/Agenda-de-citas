import React, {Fragment} from 'react';

const Citas = ({cita}) => ( 
    <Fragment>
        <h1>Citas actuales</h1>
        <div className="cita">
            <p>Mascota: <span>{cita.mascota}</span></p>
            <p>Dueño: <span>{cita.dueño}</span></p>
            <p>Fecha: <span>{cita.fecha}</span></p>
            <p>Hora: <span>{cita.hora}</span></p>
            <p>Síntomas: <span>{cita.sintomas}</span></p>
            <p>ID: <span>{cita.id}</span></p>
        </div>
    </Fragment>
     );
 
export default Citas;
