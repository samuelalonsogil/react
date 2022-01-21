import{app}from 'firebase.js'

const bd = app.firestore();
const getAllTecnologias = collection (db,'tecnologias');
const getTecnologiasOrderedByDate = query(
    collection(db,'tecnologias'),
    orderBy('createdAt','desc'),
    limit(100)
)

export {getAllTecnologias, getTecnologiasOrderedByDate}