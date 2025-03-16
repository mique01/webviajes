import React from 'react';
import FormularioPerfil from './components/FormularioPerfil';
import ActivitiesList from './components/ActivitiesList';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Webapp Organizadora de Viajes</h1>
      <FormularioPerfil />
      <hr />
      <ActivitiesList />
    </div>
  );
}

export default App;
