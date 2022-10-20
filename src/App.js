
import './App.css';
import NavBar from './Componentes/NavBar/NavBar'
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {CartProvider} from "./CartContext/CartContext"
import Cart from './Componentes/Cart/Cart'

function App() {
  return (
    <div className="App">
         

      <BrowserRouter>
        <CartProvider> 
          <NavBar/>

          <Routes>
          < Route path = '/' element= {<ItemListContainer/>} />
          < Route path ='/category/:categoryId' element={<ItemListContainer />} />
          < Route path = '/detail/:productId' element= {<ItemDetailContainer/>}/>
          < Route path= '/cart' element={<Cart/>}/>
          </Routes>

        </CartProvider>

  

      </BrowserRouter>
    </div>
  );
}

export default App;
