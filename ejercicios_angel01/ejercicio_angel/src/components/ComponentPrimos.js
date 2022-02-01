import {useParams} from "react-router-dom";

export default function ComponentePrimos(){
    const {parametro} = useParams();

    return esPrimo(parametro) ? <p>El número {parametro}  es primo</p> : <p>El número {parametro} no es primo</p>
}


const esPrimo = numero => {
    // Casos especiales
    if (numero === 0 || numero === 1 || numero === 4) return false;
    for (let i = 2; i < numero / 2; i++) {
        if (numero % i === 0) return false;
    }
    // Si no se pudo dividir por ninguno de los de arriba, sí es primo
    return true;
}