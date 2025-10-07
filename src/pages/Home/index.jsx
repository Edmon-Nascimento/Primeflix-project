import { useEffect, useState } from "react"
import{Link} from 'react-router-dom'
import api from "../../services/api"
import "./index.css"
///movie/now_playing?api_key=9d848bcea34525657f73bb675fb9b9df&language=pt-BR


function Home(){
    const [filmes, setFilmes] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        async function loadFilmes() {
            const response = await api.get("movie/now_playing",{
                params:{
                    api_key: "9d848bcea34525657f73bb675fb9b9df",
                    language: "pt-br",
                    page:1,
                
                }
            })
            setFilmes(response.data.results.slice(0,12))
            setLoading(false)
        }
        loadFilmes()
    },[])

    if(loading){
        return(
            <div className="loading">
                <h2>Carregando filmes...</h2>
            </div>
        )
    }

    return(
        <main className="container">
            <div className="lista-filmes">
                {filmes.map((filme)=>{
                    return(
                        <div className="filme" key={filme.id}>
                            <h2>{filme.title}</h2>
                            <Link to={`/filme/${filme.id}`}><img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} /></Link>
                            
                        </div>
                    )
                })}
            </div>
        </main>
    )
}

export default Home