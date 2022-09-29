
import './App.css';
import NavBar from './Componentes/NavBar/NavBar'
import Saludo from './Componentes/ItemListContainer/Greeting'
import Counter from './Componentes/Counter/Counter'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Saludo greeting={'Bienvenidos a mi tienda'} />
      <Counter/>
    </div>
  );
}

export default App;
