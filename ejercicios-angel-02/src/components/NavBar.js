import {Link} from "react-router-dom";

export default function NavBar(){
    return <div>
        <ul>
            <li><Link to ="/">Home</Link></li>
            <li><Link to ="lista-numeros">Lista de números</Link></li>
            <li><Link to ="busca-emojis">Buscador emojis</Link></li>
        </ul>
    </div>
}