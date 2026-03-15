const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener("click", filtrarLivros));

function filtrarLivros() {
    const elementobtn = document.getElementById(this.id);
    const categoria = elementobtn.value;
    const livrosFiltrados = categoria == "disponivel"
        ? livros.filter(livro => livro.quantidade > 0)
        : livros.filter(livro => livro.categoria === categoria);
    exibirLivrosNaTela(livrosFiltrados);
}