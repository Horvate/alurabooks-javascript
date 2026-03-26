const btmOrdenarPorPreo = document.getElementById("btnOrdenarPorPreco");

btmOrdenarPorPreo.addEventListener('click', ordenarLivrosPorPrco);

function ordenarLivrosPorPrco() {
    let ordenarLivros = books.sort((a, b) => a.preco - b.preco);
    exibirLivrosNaTela(ordenarLivros);
}


// obs: Alterado ordenarLivros de livros para books.