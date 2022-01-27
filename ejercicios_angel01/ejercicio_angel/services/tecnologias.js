import{app}from './firebase.js'

const db = app.firestore();

const getAllTecnologias = collection(db,'ejercicioAngel');

const getTecnologiasOrderedByDate = query(
    collection(db,'ejercicioAngel'),
    orderBy('createdAt','desc'),
    limit(100)
);

export {getAllTecnologias, getTecnologiasOrderedByDate};