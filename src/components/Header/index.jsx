import { Link } from "react-router-dom"
import "./index.css"

function Header(){
    return(
        <header>
            <Link to="/" className="logo">PRIMEFLIX</Link>
            <Link to="/favoritos" className="favoritos">Meus Filmes</Link>
        </header>
    )
}

export default Header