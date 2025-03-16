import React, { useState } from 'react';

const FormularioPerfil = () => {
  const [perfil, setPerfil] = useState({
    user_id: 'default',  // Identificador de usuario, se puede adaptar según autenticación
    social: '',
    activo: '',
    vidaNocturna: ''
  });
  const [mensaje, setMensaje] = useState('');

  const handleChange = (e) => {
    setPerfil({ ...perfil, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/profile/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(perfil)
      });
      const data = await response.json();
      setMensaje(data.message);
    } catch (error) {
      console.error('Error:', error);
      setMensaje('Error al guardar el perfil');
    }
  };

  return (
    <div>
      <h2>Crear/Actualizar Perfil</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>¿Te gusta hacer actividades con mucha gente?</label><br />
          <input type="text" name="social" onChange={handleChange} placeholder="Ej: Sí, me encanta la multitud" />
        </div>
        <div>
          <label>¿Eres activo y deportista?</label><br />
          <input type="text" name="activo" onChange={handleChange} placeholder="Ej: Sí, practico deporte regularmente" />
        </div>
        <div>
          <label>¿Te gusta salir a la noche?</label><br />
          <input type="text" name="vidaNocturna" onChange={handleChange} placeholder="Ej: Sí, disfruto de la vida nocturna" />
        </div>
        <br />
        <button type="submit">Guardar Perfil</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default FormularioPerfil;
