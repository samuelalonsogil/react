import './App.css';
import {Route, Routes} from "react-router-dom";
import ComponentePrimos from "./components/ComponentPrimos";
import ComponenteLista from "./components/ComponenteLista";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path = 'primo' element = {<ComponentePrimos numero = {6}/>}/>
          <Route path = 'lista' element = {<ComponenteLista/>}/>
      </Routes>
    </div>
  );
}

export default App;
