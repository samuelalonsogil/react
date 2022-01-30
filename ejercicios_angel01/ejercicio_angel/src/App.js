import './App.css';
import {Route, Routes} from "react-router-dom";
import ComponentePrimos from "./components/ComponentPrimos";
import ComponenteLista from "./components/ComponenteLista";
import Navbar from "./components/Navbar";
import ComponenteClase from "./components/ComponenteClase";

function App() {
  return (
    <div className="App">
        <Navbar/>
      <Routes>
          <Route path = 'primo' element = {<ComponentePrimos numero = {6}/>}/>
          <Route path = 'lista' element = {<ComponenteLista/>}/>
          <Route path = 'clase' element = {<ComponenteClase/>}/>
      </Routes>
    </div>
  );
}

export default App;
