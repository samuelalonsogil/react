import { onSnapshot } from '@firebase/firestore';
import {useEffect, useState} from "react";
import {getClase} from "../services/clase";

export default function ComponenteClase() {
    const [integrantes, setIntegrantes] = useState([]);

    useEffect(() => {
        /*me conecto a firebase y leo la info*/
        const unsubcribe = onSnapshot(
            getClase,
            (snapshot) => {
                setIntegrantes(snapshot.docs.map(doc => doc.data()))
            }
        )
        return () => unsubcribe()
    }, [])

    return <div>
        {integrantes.map(integrante => <div key = {integrante.nombre}> {integrante.nombre} </div>) }
    </div>
}