const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener("click", filtrarLivros));

function filtrarLivros() {
    const elementobtn = document.getElementById(this.id);
    const categoria = elementobtn.value;
    const livrosFiltrados = categoria == "disponivel"
        ? livros.filter(livro => livro.quantidade > 0)
        : livros.filter(livro => livro.categoria === categoria);
    exibirLivrosNaTela(livrosFiltrados);
    if (categoria == "disponivel") {
        const valorTotal = calcularValorTotalDeLivrosFiltrados(livrosFiltrados);
        exibirValorTotalDosLivrosNaTela(valorTotal);
    }
}

function exibirValorTotalDosLivrosNaTela(valorTotal) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
   <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
  `;
}