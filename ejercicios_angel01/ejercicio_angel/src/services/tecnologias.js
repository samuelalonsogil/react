import{app}from './firebase.js'
import {collection} from "@firebase/firestore";

const db = app.firestore();

const getClase = collection(db,'ejercicioAngel');

export {getClase};