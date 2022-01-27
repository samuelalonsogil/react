import{app}from './firebase.js'

const db = app.firestore();

const getClase = collection(db,'ejercicioAngel');

export {getClase};