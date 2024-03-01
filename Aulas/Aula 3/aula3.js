// const listaFilmes = document.querySelector('#listaFilmes')
// const filmes = ['Divertidamente', 'Up', 'Vovózona', 'Wall-E', 'Avatar']
const filmes = [{
    nome: 'Divertidamente',
    lancamento: 2001,
    genero: 'fantasia'},
    {
    nome:'Vovózona',
    lancamento: 2000,
    genero: 'comédia',
}]
filmes.push('Branquelas') // Adiciona 
filmes.pop()  // Remove o último elemento

/* window.onload = () => {
    for(let i=0; i < filmes.length; i++){
        let itemLista = document.createElement('li');
        // Coloca o li vazio dentro do ul
        listaFilmes.append(itemLista)
        // Adiciona texto nos li
        itemLista.innerHTML = filmes[i].nome

        let anoLancamento = document.createElement('span')
        itemLista.append(anoLancamento)
        anoLancamento.innerHTML = `<br><strong> Data de Lançamento:</strong> ${filmes[i].lancamento}`
    }
} */

// forEach() = for pré definido que vai passar por todos os elementos
filmes.forEach(function(meuElemento){
    console.log(meuElemento.nome + ' Conteúdo Extra')
})