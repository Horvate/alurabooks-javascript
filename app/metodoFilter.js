const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener("click", filtrarLivros));

function filtrarLivros() {
    const elementobtn = document.getElementById(this.id);
    const categoria = elementobtn.value;
    let livrosFiltrados = livros.filter(livro => livro.categoria == categoria);
    exibirLivrosNaTela(livrosFiltrados);
}