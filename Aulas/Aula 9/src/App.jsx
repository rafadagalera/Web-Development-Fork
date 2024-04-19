import './App.css'

function App() {
  
  let contador = 10

  function aumentar() {
    contador = contador + 1
    console.log(contador)
  }

  return (
    <>
      <h1>Contador</h1>
      <p>{contador}</p>
      <button onClick={aumentar}>Aumentar</button>
      <button>Diminuir</button>
      <button>Zerar</button>
    </>
  )
}

export default App
