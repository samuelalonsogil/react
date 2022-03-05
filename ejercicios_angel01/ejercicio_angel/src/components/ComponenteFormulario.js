import {useState} from "react";
import {saveForm} from "../services/enviarDatos";

export default function ComponenteFormulario(){

    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState();

    let handleSubmit = async (e) => {
        /*tratar con los datos del formulario*/
        console.log(nombre,edad);

        await saveForm({nombre, edad});

        /*previene que la página se recargue*/
        e.preventDefault();
    }

    let handleChange = (e) => {
        const {name, value} = e.target;
        if (name === "nombre") setNombre(value);
        if (name === "edad") setEdad(value);
    }
    return <div>
        <form onSubmit={handleSubmit}>
            <label>Nombre:
                <input name = 'nombre' value = {nombre} onChange={handleChange}/>
            </label>

            <label>Edad:
                <input name = 'edad' value = {edad} onChange={handleChange}/>
            </label>
            <input type="submit" value='enviar'/>

        </form>
    </div>
}