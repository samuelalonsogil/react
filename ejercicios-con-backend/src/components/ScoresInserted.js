import {useEffect, useState} from "react";

export default function ScoresInserted(){
    const [scores, setScores] = useState([]);

    useEffect( () => {
        async function apiCall(){
            const req = await fetch('http://localhost:5300/puntuacion/');
            const data = await req.json();
            setScores(data.datos);
        }
        apiCall();
    } ,[])

    return <>

        <h3> Score lists </h3>
        <ul>
            { scores.map(score => <li key = {score._id} > {score.score} </li> ) }
        </ul>

    </>
}