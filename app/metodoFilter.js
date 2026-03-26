const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener("click", handleFilterClick));

function handleFilterClick() {
    const selectedCategory = this.value;
    const filteredBooks = filterBooksByCategory(selectedCategory, books);
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

const filterBooksByCategory = (selectedCategory, books) => {
    return selectedCategory === "disponivel"
        ? books.filter(livro => livro.quantidade > 0)
        : books.filter(livro => livro.categoria === selectedCategory);
}

// Obs: Refatiorada. 
// obs: Alterado filteredBooks livros para books.
// obs: Alterado parâmetro da função livros para books.