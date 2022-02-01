import './App.css';
import {Route, Routes} from "react-router-dom";
import ComponentePrimos from "./components/ComponentPrimos";
import ComponenteLista from "./components/ComponenteLista";
import Navbar from "./components/Navbar";
import ComponenteClase from "./components/ComponenteClase";
import ComponenteFormulario from "./components/ComponenteFormulario";


function App() {
  return (
    <div className="App">
        <Navbar/>
      <Routes>
          <Route path = 'primo/:parametro' element = {<ComponentePrimos/>}/>
          <Route path = 'lista' element = {<ComponenteLista/>}/>
          <Route path = 'clase' element = {<ComponenteClase/>}/>
          <Route path = 'formulario' element = {<ComponenteFormulario/>}/>
      </Routes>
    </div>
  );
}

export default App;
