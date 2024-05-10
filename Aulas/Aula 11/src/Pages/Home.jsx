import data from "../artigos.json"
function Home() {
    return ( 
        <>
        <input 
        type="text"
        name="buscaFilme"
        id="buscaFilme"
        placeholder="Busque um filme "/>
        {/* <div id="listaFilme">
            <h1>Titulo do filme</h1>
            <div id="card"><img src="" alt="" /></div>
            <div id="tags">
                <span></span>
                <span></span>
            </div>
            <div id="text">
                <p></p>
                <p></p>
            </div>
        </div> */}
        <div id="listaFilmes">
        {
        data.map((post, index)=>(
            <>
            <div id="card" key={index}>
                <h1>{post.title}</h1>
                <img src={post.image} alt={post.title}/>
            </div>
            <div id="tags">
                {post.tags.map(tags => (
                    <span className="p-2" key={tags}>{tags}</span>
                ))}
            </div>
            <div id="text">
                {post.text.map(text => (
                    <span className="p-2" key={text}>{text}</span>
                ))}
            </div>
            </>
        ))
        }
        </div>
        </>
     );
    }
    
    export default Home;