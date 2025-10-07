import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import{Link} from 'react-router-dom'
import api from "../../services/api"
import "./index.css"

function Filme(){
    const {id} = useParams()
    const [filme,setFilme] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        async function loadFilme(){
            await api.get(`/movie/${id}`,{
                params:{
                    api_key: "9d848bcea34525657f73bb675fb9b9df",
                    language: "pt-br"
                }
            })
            .then((response)=>{
                setFilme(response.data)
                setLoading(false)
            })
            .catch(()=>{

            })
        }
        loadFilme()

        return()=>{

        }
    },[])

    if(loading){
        return(
            <div className="loading">
                <h2>Carregando detalhes...</h2>
            </div>
        )
    }

    return(
        <div className='filme-info'>
            <h2>{filme.title}</h2>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} srcset="" />
            <h3>Sinopse</h3>
            <p className='sinopse'>{filme.overview}</p>
            <strong>Avaliação: {filme.vote_average}/10</strong>
            <div>
                <button>Salvar</button>
                <button>Trailer</button>
            </div>
        </div>
    )
}

export default Filme