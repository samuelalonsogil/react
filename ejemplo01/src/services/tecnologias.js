import{app}from './firebase.js'
import {collection, getFirestore, limit, orderBy, query} from "@firebase/firestore";

const db = getFirestore(app);

const getAllTecnologias = collection(db,'tecnologias');

const getTecnologiasOrderedByDate = query(
    collection(db,'tecnologias'),
    orderBy('createdAt','desc'),
    limit(100)
);

export {getAllTecnologias, getTecnologiasOrderedByDate};