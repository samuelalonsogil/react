import {useEffect, useState} from "react";
import Pokemon from "./Pokemon";

export default function Pokedex( {cantidad} ){
    const [pokemons, setPokemons] = useState( [] );
    useEffect ( async () => {
        const url = 'https://pokeapi.co/api/v2/pokemon/?limit='+cantidad;
        const req = await fetch(url);
        const data = await req.json();
        setPokemons(data.results);
    } ,[] );

    return <div>
        {pokemons.map( pokemon => <Pokemon key = {pokemon.name} url = {pokemon.url} />) };
    </div>
}