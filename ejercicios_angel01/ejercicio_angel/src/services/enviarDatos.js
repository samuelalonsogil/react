import {app} from "./firebase";
import {addDoc, collection, getFirestore} from "@firebase/firestore";

const db = getFirestore(app);
const saveForm = async form => await addDoc(collection( db, 'formulario' ) ,form)
export {saveForm};