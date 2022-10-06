import React, { useState } from 'react'
import './App.css';
import NavBar from './Componentes/NavBar/NavBar'
import Saludo from './Componentes/ItemListContainer/ItemListContainer'
import Counter from './Componentes/Counter/Counter'
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer />

      <ItemDetailContainer/>
    </div>
  );
}

export default App;
