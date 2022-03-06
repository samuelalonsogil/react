import './App.css';
import {Route, Routes} from "react-router-dom";
import Saludador from "./Components/Saludador";
import Pokedex from "./Components/Pokedex";
import ComponenteNumRandom from "./Components/ComponenteNumRandom";
import Peliculas from "./Components/Peliculas";
import Pokemon from "./Components/Pokemon";
import ComponenteTemporizador from "./Components/ComponenteTemporizador";
import ComponenteGrados from "./Components/ComponenteGrados";
import ComponenteEventos from "./Components/ComponenteEventos";
import ComponenteMapeado from "./Components/ComponenteMapeado";
import ComponenteProps from "./Components/ComponenteProps.";
import ComponenteConClases from "./Components/ComponenteConClases";
import ComponenteConFunciones from "./Components/ComponenteConFunciones";
import NavBar from "./Components/NavBar";
import ListaTecnologiasFireBase from "./Components/ListaTecnologiasFireBase";
import PokedexV2 from "./Components/PokedexV2";
function App() {
  return (
    <div>
        <NavBar/>
      <Routes>
        <Route path = "/" element = {<Saludador nombre = 'Samu' apellido = 'Alonso'/>} />
        <Route path = "pokedex" element = {<Pokedex cantidad={100}> </Pokedex>} />
        <Route path = "random" element = {<ComponenteNumRandom> </ComponenteNumRandom>}> </Route>
        <Route path = 'temp/:grados' element = {<ComponenteGrados funcionGrados={gradosC => (gradosC * 9 / 5) + 32}/>}/>
        <Route path = 'pokemon' element = {<Pokemon url = 'https://pokeapi.co/api/v2/pokemon/ditto' />}/>
        <Route path = 'peliculas' element = {<Peliculas titulo = {'ali g'}/>}/>
        <Route path = 'temporizador' element = {<ComponenteTemporizador/>}/>
        <Route path = 'tecnologias' element = {<ListaTecnologiasFireBase/>}/>
        <Route path = 'props' element =
            {
              <ComponenteProps
                mensaje = 'hola props'
                valor = {10}
                activo = {true}
                array01 = {['angel', 'bea' , 'pepe']}
                miFuncion = {num=>num*num}
                miJsx = {<p>Soy un Jsx</p>}
                otroComponente = {<Saludador nombre = 'Juan' apellido = 'Montero'/>
              }/>
            }
        />
        <Route path = 'eventos' element = {<ComponenteEventos/>}/>
        <Route path = 'mapeado' element = {<ComponenteMapeado />}/>
        <Route path = 'clases' element = {<ComponenteConClases />}/>
        <Route path = 'funciones' element = {<ComponenteConFunciones />}/>
        <Route path = 'pokedexV2' element = {<PokedexV2/>}/>



      </Routes>

    </div>
  );
}

export default App;
