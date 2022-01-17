import {useState} from "react";

//hooks useState->guardar el estado de algo
export default function(){

    //let valorContador = useState(2)[0]; //lee valor cont
    //let cambiarContador = useState(2)[1];//funcion para cambiar contador

    const [contador, setContador] = useState(2);

    const disminuirContador = ()=> setContador(contador-1);

    return <div>
        <p>El valor del contador es: {contador} </p>
        <button onClick={()=>setContador(contador+1)}>Aumentar contador</button>
        <button onClick={()=>disminuirContador()}>Disminuir contador</button>
    </div>;
}
