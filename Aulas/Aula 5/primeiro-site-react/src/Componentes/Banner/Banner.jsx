import './Banner.css'

function Banner(props) {
    return(
        <header>
            {/* <h1 className="titulo-banner">Título do meu Banner</h1> */}
            <h1 className="titulo-banner">{props.textoBanner}</h1>
            <p>Parágrafo do Banner</p>
        </header>
    )
}

export default Banner