const btmOrdenarPorPreo = document.getElementById("btnOrdenarPorPreco");

btmOrdenarPorPreo.addEventListener('click', ordenarLivrosPorPrco);

function ordenarLivrosPorPrco() {
    let ordenarLivros = livros.sort((a, b) => a.preco - b.preco);
    exibirLivrosNaTela(ordenarLivros);
}