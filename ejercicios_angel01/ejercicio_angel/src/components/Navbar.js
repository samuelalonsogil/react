import {Link} from "react-router-dom";

export default function Navbar(){
    return <div>
        <Link to = '/'> Home </Link>
        <Link to = 'lista'> Lista de super héroes </Link>
        <Link to = 'primo'> Número primo </Link>
        <Link to = 'clase'> Clase de 2 DAM </Link>
    </div>
}