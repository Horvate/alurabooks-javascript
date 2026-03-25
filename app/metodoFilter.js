const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener("click", handleFilterClick));

function handleFilterClick() {
    const selectedCategory = this.value;
    const filteredBooks = filterBooksByCategory(selectedCategory, livros);
    exibirLivrosNaTela(filteredBooks);
    handleAvailableBooks(selectedCategory, filteredBooks);
}

function exibirValorTotalDosLivrosNaTela(totalValue) {
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
   <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${totalValue}</span></p>
    </div>
  `;
}

const handleAvailableBooks = (selectedCategory, livrosFiltrados) => {
    if (selectedCategory === "disponivel") {
        const totalValue = calcularValorTotalDeLivrosFiltrados(livrosFiltrados);
        exibirValorTotalDosLivrosNaTela(totalValue);
    }
}

const filterBooksByCategory = (selectedCategory, livros) => {
    return selectedCategory === "disponivel"
        ? livros.filter(livro => livro.quantidade > 0)
        : livros.filter(livro => livro.categoria === selectedCategory);
}