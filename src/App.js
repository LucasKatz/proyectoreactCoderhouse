
import './App.css';
import NavBar from './Componentes/NavBar/NavBar'
import Saludo from './Componentes/ItemListContainer/Greeting'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Saludo greeting={'Bienvenidos a mi tienda'} />
    </div>
  );
}

export default App;
