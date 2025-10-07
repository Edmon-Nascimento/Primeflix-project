import { Link } from "react-router-dom"
import "./index.css"

function Error(){
    return(
        <div className="not-found">
            <h2>404</h2>
            <p>Página não encontrada!</p>
            <p ><Link to="/" className="back-to-home">Clique aqui</Link>para acessar os filmes disponíveis</p>
        </div>
        
    )
}

export default Error