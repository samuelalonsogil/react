export default function ComponentePrimos(props){
    return esPrimo(props.numero) ? <p>El número {props.numero}  es primo</p> : <p>El número {props.numero} no es primo</p>
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