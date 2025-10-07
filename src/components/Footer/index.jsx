import "./style.css"
import {Link} from 'react-router-dom'

function Footer(){
    return(
        <footer>
            <p>Criado por <Link to="https://edmon-nascimento.github.io/Linktree-Edmoncode/" target="_blank">Edmoncode</Link> | &copy; Todos os direitos reservados</p>
        </footer>
    )
}

export default Footer