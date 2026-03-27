const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener("click", handleFilterClick));

function handleFilterClick() {
    const selectedCategory = this.value;
    const filteredBooks = filterBooksByCategory(selectedCategory, books);
    displayBooks(filteredBooks);
    handleAvailableBooks(selectedCategory, filteredBooks);
}

function displayTotalPrice(totalValue) {
    totalAvailableBooksElement.innerHTML = `
   <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${totalValue}</span></p>
    </div>
  `;
}

const handleAvailableBooks = (selectedCategory, livrosFiltrados) => {
    if (selectedCategory === "disponivel") {
        const totalValue = calculateTotalPrice(livrosFiltrados);
        displayTotalPrice(totalValue);
    }
}

const filterBooksByCategory = (selectedCategory, books) => {
    return selectedCategory === "disponivel"
        ? books.filter(livro => livro.quantidade > 0)
        : books.filter(livro => livro.categoria === selectedCategory);
}