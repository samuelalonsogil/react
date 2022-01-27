import { onSnapshot } from '@firebase/firestore';
import {useEffect, useState} from "react";
export default function ComponenteClase() {
    const [integrantes, setIntegrantes] = useState([]);

    useEffect(() => {
        const unsubcribe = onSnapshot(
            getClase(),
            (snapshot) => {
                setIntegrantes(snapshot.docs.map(doc => doc.data()))
            }
        )
        return () => unsubcribe()
    }, [])

    return <div>
        {integrantes.map(integrante => <div>{integrante.nombre}</div>)}
    </div>
}