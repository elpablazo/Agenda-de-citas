import React, { Fragment, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Formulario = ({crearCita}) => {
  // State para el formulario de citas con sus valores de los forms inicializados vacíos
  const [cita, setCita] = useState({
    mascota: "A",
    dueño: "A",
    fecha: "2020-08-05",
    hora: "02:02",
    sintomas: "KK",
  });

  // State para los errores en los campos del formulario
  const [error, setError] = useState(false);

  // Esta función maneja el cambio de cualquiera de los formularios para actualizarlo
  const handleChange = (campo) => {
    setCita({
      ...cita, // Se hace una copia de lo que se tenía anteriormente para no perder esos datos
      [campo.target.name]: campo.target.value, // Se asigna el valor del formulario a su formulario
    });
  };

  // Esta constante permite usar simplemente "nombre" en vez de "cita.nombre"
  const { mascota, dueño, fecha, hora, sintomas } = cita;

  const submitCita = (e) => {
    // Evita que se envíen en métdo get
    e.preventDefault();
    //Hace una validación de que todos los campos estén llenos
    if (
      mascota.trim() === "" ||
      dueño === "" ||
      fecha === "" ||
      hora === "" ||
      sintomas === ""
    ) {
      // Si faltan campos, el error se pone true
      setError(true);
      return;
    } else {
      // Si no faltan campos, el error se vuelve false
      setError(false);
    }
    // Una vez validada, generamos un id único para cada cita
    cita.id = uuidv4(); // Creamos una nueva propiedad del objeto cita y le insertamos una id única
    // Enviamos la cita recién generada a la base de datos de citas
    crearCita(cita);
    // Vaciamos el formulario para que esté limpio de nuevo
    setCita({
      mascota: 'EL cofi y la kelly',
      dueño: 'Awe',
      fecha: '2020-08-05',
      hora: '05:05',
      sintomas: 'Son muy traviesos'
    });
  };

  return (
    <Fragment>
      <h1>Formulario</h1>

      {/* Este código valida si hay un error, y de haberlo, muestra un mensaje de error */}
      {error ? (
        <p className="alerta-error">Todos los campos son obligatorios</p>
      ) : null}

      <form onSubmit={submitCita}>
        <label>Nombre de la mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Firualis"
          onChange={
            handleChange
          } /* Esta funcion permite detectar si hay cambios en el form y modificar los datos en la cita */
          value={mascota}
        />

        <label>Nombre del dueño</label>
        <input
          type="text"
          name="dueño"
          className="u-full-width"
          placeholder="Ángel Martínez"
          onChange={handleChange}
          value={dueño}
        />

        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={handleChange}
          value={fecha}
        />

        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={handleChange}
          value={hora}
        />

        <label>Síntomas/Razón de visita</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={handleChange}
          value={sintomas}
        />

        <button type="submit" className="u-full-width button-primary">
          Enviar cita
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;
