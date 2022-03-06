import {useEffect, useState} from "react";

export default function PokedexV2(){
    const [name, setName] = useState('');
    const [picture, setPicture] = useState('');
    const [weight, setWeight] = useState('');
    const [found, setFound] = useState(false);

    let handleSubmit = async e =>{
        e.preventDefault();

        try{
            const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
            const req = await fetch(url);
            const data = await req.json();
            console.log(data);

            setName(data.name);
            setWeight(data.weight/10);
            setPicture(data.sprites.front_default);
            setFound(true);

        }catch (err){
            alert('error');
            setFound(false);
        }
    }

    let handleChange = e =>{
        const {name,value}=e.target;
        name==='pokemonName'?setName(value):alert('error');
    }

    return <>
        <h3>Pokemon search</h3>

        <div>

            <form onSubmit={handleSubmit}>
                <label>
                    pokemon name:
                    <input type="text" name="pokemonName" value={name} onChange={handleChange}/>
                </label>

                <br/>

                <label>
                    <input type={"submit"} name={"search"} value={"Search"}/>
                </label>

            </form>

        </div>

        <div>

            {found && <span>pokemon name: {name}</span>}
            <br/>
            {found && <span>weight: {weight}</span>}
            <br/>
            {found && <img src={picture} alt={'pokemon sprite'}/>}
            <br/>
            {!found && <span>no pokemon found</span>}

        </div>
    </>
}