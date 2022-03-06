import {useState} from "react";

export default function ListScoresGtThanValue(){

    const [scores, setScores] = useState([]);
    const [scoreFiltered, setScoreFiltered] = useState();

    let handleSubmit = async (e) =>{
        e.preventDefault();
        async function apiCall(){
            const req = await fetch( 'http://localhost:5300/puntuacion/puntuacionesHigherThan?higher='+scoreFiltered );
            const data = await req.json();
            setScores(data.datos);
        }
        apiCall();

    }

    let handleChange = (e) =>{
        setScoreFiltered(e.target.value);
    }

    return <>

        <div>
            <form onSubmit={handleSubmit}>

                <label> score:
                    <input type="number" name = 'scoreFiltered' value={scoreFiltered} onChange={handleChange} />
                </label>

                <input type='submit' value='send' />

            </form>

            <h3>List scores higher than {scoreFiltered}</h3>
            <ul>
                { scores.map( score => <li key={score._id} > score: {score.puntuacion} name: {score.name}</li> ) }
            </ul>
        </div>


    </>



}