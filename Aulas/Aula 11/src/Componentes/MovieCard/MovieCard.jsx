import {Link} from 'react-router-dom'
export default function MovieCard({filme}){
    return(
    <div className="flex flex-col">
        <p>{filme.title}</p>
        <img src={`https://image.tmdb.org/t/p/w400/${filme.poster_path}`} alt={`Poster do filme ${filme.title}`}/>
        <img src={`https://image.tmdb.org/t/p/w400/${filme.backdrop_path}`} alt={`Poster do filme ${filme.title}`}/>
        <Link to = {`${filme.id}`}>Saber Mais</Link>
    </div>
    )
}