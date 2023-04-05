import './App.css';
import { ItemList } from './components/ItemList/ItemList';
import { Navbar } from './components/Navbar/Navbar';

function App() {

let saludo = "Bienvenido a nuestro nuevo mundo de saboress"

  return (
    <div className="App">
      <Navbar />
      <ItemList saludo={saludo} />
    </div>
  );
}

export default App;

