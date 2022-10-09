import React, { useState } from 'react'
import './App.css';
import NavBar from './Componentes/NavBar/NavBar'
import Saludo from './Componentes/ItemListContainer/ItemListContainer'
import Counter from './Componentes/Counter/Counter'
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <NavBar/>

      <Routes>
      < Route path = '/' element= {<ItemListContainer/>} />
      < Route path ='/category/:categoryId' element={<ItemListContainer />} />
      < Route path = '/detail/:productId' element= {<ItemDetailContainer/>}/>
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
