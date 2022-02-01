import{app}from './firebase.js'
import {collection, getFirestore} from "@firebase/firestore";

//const db = app.firestore();
const db = getFirestore(app);
const getClase = collection(db,'ejercicioAngel');

export {getClase};