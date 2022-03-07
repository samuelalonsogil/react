import { Route, Routes} from 'react-router-dom'
import NavBar from "./components/NavBar";
import ComponenteClase from "./components/ComponenteClase";
import FormAudio from "./components/FormAudio";

export default function App(){
    return (
        <div>
            <NavBar/>
            <Routes>
                <Route path = 'fireBase' element = {<ComponenteClase/>}/>
                <Route path = 'formAudio' element = {<FormAudio/>}/>
            </Routes>
        </div>
    );
}
