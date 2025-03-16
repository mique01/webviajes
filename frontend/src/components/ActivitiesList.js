import React, { useState } from 'react';

const ActivitiesList = () => {
  const [destination, setDestination] = useState('');
  const [activities, setActivities] = useState([]);

  const handleChange = (e) => {
    setDestination(e.target.value);
  };

  const fetchActivities = async () => {
    try {
      const response = await fetch(`/api/activities/?destination=${destination}`);
      const data = await response.json();
      setActivities(data.activities);
    } catch (error) {
      console.error('Error al obtener actividades:', error);
    }
  };

  return (
    <div>
      <h2>Buscar Actividades</h2>
      <div>
        <label>Destino (ejemplo: Paris): </label>
        <input type="text" value={destination} onChange={handleChange} />
        <button onClick={fetchActivities}>Buscar</button>
      </div>
      {activities.length > 0 && (
        <div>
          <h3>Actividades en {destination}:</h3>
          <ul>
            {activities.map((act, index) => (
              <li key={index}>
                <strong>{act.nombre}</strong> - Precio: {act.precio} - Duración: {act.duracion}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ActivitiesList;
