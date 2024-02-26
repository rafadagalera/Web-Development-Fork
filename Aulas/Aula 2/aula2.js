const btn1 = document.querySelector('button')
const listaFilmes = document.querySelector('#listaFilmes')
const itemLista = document.createElement('li')
const textoUsuario = document.querySelector('#filmeInput')

btn1.addEventListener('click', ()=>{
    listaFilmes.append(itemLista)
    // Adiciona um texto dentro do html
    itemLista.innerHTML = textoUsuario.value
    itemLista.style.backgroundColor = "red"
})