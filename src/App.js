import React, { useState } from 'react'
import './App.css';
import NavBar from './Componentes/NavBar/NavBar'
import Saludo from './Componentes/ItemListContainer/ItemListContainer'
import Counter from './Componentes/Counter/Counter'
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Saludo greeting={'Bienvenidos a mi tienda'} />
      <ItemListContainer />
      <Counter/>
    </div>
  );
}

export default App;
