const bookListContainer = document.getElementById("livros");
const totalAvailableBooksElement = document.getElementById("valor_total_livros_disponiveis");

function displayBooks(livro) {
  clearScreen();
  const booksHTML = livro.map(createBookTemplate).join("");
  bookListContainer.innerHTML = booksHTML;
}

function clearScreen() {
  totalAvailableBooksElement.innerHTML = "";
  bookListContainer.innerHTML = "";
}

function createBookTemplate(livro) {
  const availabilityClass = livro.quantidade > 0
    ? "livro__imagens"
    : "livros__imagens indisponivel";
  return `<div class="livro">
      <img class="${availabilityClass}" src="${livro.imagem}" alt="${livro.alt}"/>
      <h2 class="livro__titulo">
        ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
     </div>
    </div>`
}