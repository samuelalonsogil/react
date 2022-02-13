
import './App.css';
import NavBar from "./components/NavBar";
import {Routes, Route} from 'react-router-dom'
import ListaNumeros from './components/ListaNumeros'
import Home from "./components/Home";
import BuscadorEmojis from "./components/BuscadorEmojis";
import BuscadorPrueba from "./components/BuscadorPrueba";
import SetColour from "./components/SetColour";
import GetColours from "./components/GetColours";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="lista-numeros" element = { <ListaNumeros/> } />
        <Route path="busca-emojis" element = { <BuscadorEmojis/> } />
        <Route path="buscador-prueba" element = { <BuscadorPrueba/> } />
        <Route path="colores" element = { <GetColours/> } />
      </Routes>
    </div>
  );
}

export default App;
