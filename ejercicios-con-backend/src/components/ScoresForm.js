import {useState} from "react";

export default function ScoresForm(){
    const[score, setScore] = useState();
    const[name, setName] = useState('');
    const[user, setUser] = useState('');

    let handleSubmit = async (e) =>{
        e.preventDefault();
        const rawResponse = await fetch( 'http://localhost:5300/puntuacion/', {
            method: 'POST',
            headers: {
                'Accept':'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( { puntuacion:score, name:name, user:user } )
        } );

        const content = await rawResponse.json();
        console.log(content);
    }

    let handleChange = (e) => {
        const {name,value} = e.target;
        if (name==='score')setScore(value);
        if (name==='name')setName(value);
        if (name==='user')setUser(value);
    }

    return <>

        <div>

            <h2> Insert scores </h2>
            <form onSubmit={handleSubmit}>
                <label> name:
                    <input name = 'name' value={name} onChange={handleChange}/>
                </label>

                <label> score:
                    <input name = 'score' value={score} onChange={handleChange} />
                </label>

                <label> user:
                    <input name = 'user' value={user} onChange={handleChange} />
                </label>

                <input type='submit' value='send' />

            </form>

        </div>

    </>
}