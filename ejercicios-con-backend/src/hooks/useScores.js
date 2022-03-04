import { useState, useEffect } from "react";

export function useScores() {
    const [scores, setScores] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        async function llamadaAPI(){
            const req = await fetch('http://localhost:5300/puntuacion/')
            const data = await req.json()
            setScores(data.datos)
            setLoading(false)
        }
        llamadaAPI()
    }, [])

    return { scores, loading }
}
