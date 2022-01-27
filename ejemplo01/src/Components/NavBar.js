import {Link} from 'react-router-dom'

function NavBar() {
    return <div>
        <Link to="/">Home</Link> |
        <Link to="/Pokedex">Listar los pokemons</Link> |
        <Link to="/random">Numero random</Link> |
        <Link to="/temp/88">Temperatura</Link>
    </div>
}

export default NavBar;