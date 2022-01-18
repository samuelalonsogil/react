export default function ComponenteMapeado(props){
    const nombres = ['naranja', 'limon', 'pera', 'manzana']
    return <ul>
                                    //key distinta para cada elemento
        {nombres.map(fruta => <li key={fruta}>{fruta}</li>)}
    </ul>
}

/*dentro de jsx no se pueden usar ni ifs normales ni fors (en funciones sin jsx sí)*/
//funcion jsx -> mezcla de js y html