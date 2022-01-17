import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ComponenteConClases from "./Components/ComponenteConClases";
import ComponenteConFunciones from "./Components/ComponenteConFunciones";
import Saludador from "./Components/Saludador";
import ComponenteProps from "./Components/ComponenteProps.";
import ComponenteMapeado from "./Components/ComponenteMapeado";
import ComponenteEventos from "./Components/ComponenteEventos";
import ComponenteGrados from "./Components/ComponenteGrados";
import ComponenteNumRandom from "./Components/ComponenteNumRandom";

ReactDOM.render(
    <React.StrictMode>
            <ComponenteNumRandom/>
        <ComponenteGrados
            funcionGrados = {gradosC=>(gradosC*9/5)+32}
        />
        <ComponenteEventos/>
        <ComponenteMapeado />
        <ComponenteProps
            mensaje = 'hola props'
            valor = {10}
            activo = {true}
            array01 = {['angel', 'bea' , 'pepe']}
            miFuncion = {num=>num*num}
            miJsx = {<p>Soy un Jsx</p>}
            otroComponente = {<Saludador nombre = 'Juan' apellido = 'Montero'/>}
        />
        <Saludador nombre = 'Samu' apellido = 'Alonso'/>
        <ComponenteConClases />
        <ComponenteConFunciones />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
