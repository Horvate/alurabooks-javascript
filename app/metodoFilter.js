import { buttons, totalAvailableBooksElement } from "../app/element.js";
import { calculateTotalPrice } from "./metodoreduce.js";
import { displayBooks } from "../app/metodoForEach.js";
import { books } from "../app/api.js";

buttons.forEach(btn => btn.addEventListener("click", handleFilterClick));

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

const handleAvailableBooks = (selectedCategory, filterBooks) => {
    if (selectedCategory === "disponivel") {
        const totalValue = calculateTotalPrice(filterBooks);
        displayTotalPrice(totalValue);
    }
}

const filterBooksByCategory = (selectedCategory, books) => {
    return selectedCategory === "disponivel"
        ? books.filter(livro => livro.avaliable > 0)
        : books.filter(livro => livro.category === selectedCategory);
}