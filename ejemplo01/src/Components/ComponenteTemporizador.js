import {useEffect, useState} from "react";

export default  function ComponenteTemporizador(){
    const [contador, setContador] = useState(0);



    useEffect( () => {
        /*se ejecutará cuando el componente se cambie*/
    } )

    useEffect( () => {
        /*se ejecutará una sola vez*/
        const temp = setTimeout( ()=>setContador(contador + 1), 1000 );
        return () => clearTimeout(temp); // desmonta el temporizador
    }, [] );

    useEffect( () => {
        /*se ejecutará cuando la variable contador cambie*/
    }, [contador] )

    return <div>El contador vale: {contador} </div>;
}