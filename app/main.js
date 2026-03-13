let livros = [];
const endepointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscasLivrosDaAPI();

async function getBuscasLivrosDaAPI() {
    const res = await fetch(endepointDaAPI);
    livros = await res.json();
    let livrosComDesconto = aplicarDesconto(livros); 
    exibirLivrosNaTela(livrosComDesconto);
}