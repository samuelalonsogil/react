import {useEffect, useState} from "react";
import {onSnapshot} from '@firebase/firestore'
import {getAllTecnologias} from "../../services/tecnologias";

export default function ListaTecnologiasFireBase(){
    const[tecnologias, setTecnologias] = useState([]);

    useEffect( () => {
        const unsuscribe = onSnapshot(
            getAllTecnologias(),
            (snapshot) => {
                setTecnologias(snapshot.docs.map(doc => doc.data))
            }
        )
        return () =>unsuscribe();
    }, [] )

    return {tecnologias.map(tecnologia=><div>{tecnologia.nombre}</div>)}
}