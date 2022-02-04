import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import {Routes, Route} from 'react-router-dom'
import ListaNumeros from './components/ListaNumeros'
import Home from "./components/Home";
import BuscadorEmojis from "./components/BuscadorEmojis";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="lista-numeros" element = { <ListaNumeros/> } />
        <Route path="busca-emojis" element = { <BuscadorEmojis/> } />
      </Routes>
    </div>
  );
}

export default App;
