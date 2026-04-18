import { totalAvailableBooksElement, bookListContainer } from "../element.js";

export function displayTotalPrice(totalValue) {
    totalAvailableBooksElement.innerHTML = `
   <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${totalValue}</span></p>
    </div>
  `;
}

 function createBookTemplate(livro) {
  const availabilityClass = livro.avaliable > 0
    ? "livro__imagem"
  : "livro__imagem indisponivel";
  return `<div class="livro">
      <img class="${availabilityClass}" src="${livro.image}" alt="${livro.alt}"/>
      <h2 class="livro__titulo">
        ${livro.title}
      </h2>
      <p class="livro__descricao">${livro.author}</p>
      <p class="livro__preco" id="preco">R$${livro.price.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${livro.category}</span>
    </div>
    </div>`
}
 
function clearScreen() {
  totalAvailableBooksElement.innerHTML = "";
  bookListContainer.innerHTML = "";
}

export function displayBooks(book) {
  clearScreen();
  const booksHTML = book.map(createBookTemplate).join("");
  bookListContainer.innerHTML = booksHTML;
}