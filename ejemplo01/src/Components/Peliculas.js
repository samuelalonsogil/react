import {useEffect, useState} from "react";

export default function Peliculas( {titulo} ){
    const [pelicula, setPelicula] = useState(null);
    useEffect( async () => {
        const url = 'http://www.omdbapi.com/?apikey=1a3b8942&t='+titulo;
        const req = await fetch(url);
        const data = await req.json();
        setPelicula(data);
    }, [])

    return <div>
        {pelicula ?
            <div>{pelicula.Title}
                {pelicula.Year}
                <img src = {pelicula.Poster}/>
                </div>:'Cargando'}</div>}


/*pasar titulo y mostrar info*/