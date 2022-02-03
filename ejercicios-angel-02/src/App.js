import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import {Routes, Route} from 'react-router-dom'
import ListaNumeros from './components/ListaNumeros'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="lista-numeros" element = { <ListaNumeros/> } />
      </Routes>
    </div>
  );
}

export default App;
