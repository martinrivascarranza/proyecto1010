
import React from 'react';
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting="Bienvenido a 10:10!" />
    </div>
  );
}

export default App;
