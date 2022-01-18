import {useState} from "react";

export default function ComponenteNumRandom(){
    const [num, setNum] = useState(Math.random() * (7-1) + 1);
    return <div>
        <p>El número aleatorio es: {num}</p>
    </div>;
}
/*crea un componente que al pulsar un botón muestre por pantalla
un num random entre 1 y 6 (useState)*/
