import {useEffect, useState} from "react";

export default function Pokemon (props){
    const [pokemon, setPokemon] = useState(null);

    useEffect(async () => {
            /*fetch(props.url)
                .then(response => response.json() )
                    .then(data=>setPokemon(data))*/

        const req = await fetch(props.url);
        const data = await req.json();
        setPokemon(data);



    }, [] )

    return <div>{pokemon ?
        <div>{pokemon.name}
        <img src={pokemon.sprites.front_default}/>
        </div>

        :'Cargando pokemon...'}</div>
}