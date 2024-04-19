import {useState, useEffect} from 'react'
import './App.css'

export default function App() {
  
  const [contador, setContador] = useState(0)
  const [photos, setPhotos] = useState([])

  // Só vai renderizar se houver alteração na interface (padrão do useEffect)
  useEffect(() => {
    // Pega a API pelo link, retorna uma promisse
    fetch('https://jsonplaceholder.typicode.com/photos')
    // Se a promisse der certo:
    .then(response => response.json())
    .then(data => setPhotos(data))
    // Se der erro:
    .catch( error => console.error("Erro: ", error))
  }, []) // [] = array inicial da página, entrou json/api ou algo novo ~> renderiza

  function aumentar() {
    setContador(contador + 1)
  }

  function diminuir() {
    setContador(contador - 1)
  }

  function zerar(){
    setContador(0)
  }

  return (
    <>
      <h1>Contador</h1>
      <p>{contador}</p>
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={diminuir}>Diminuir</button>
      <button onClick={zerar}>Zerar</button>

      <h1>Fotos</h1>
      {/* map = passa por todas as posições. imagem = iterador*/}
      {photos.map(imagem => (
        <img key={imagem.id} src={imagem.url} alt={imagem.title} width={100}/>
      ))}
    </>
  )
}