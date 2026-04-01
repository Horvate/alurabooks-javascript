import { displayBooks } from "../app/metodoForEach.js";
import { sortByPriceButton } from "../app/element.js";
import { books } from "../app/main.js";

sortByPriceButton.addEventListener('click', sortBooksByPrice);

function sortBooksByPrice() {
    let sortedBooks = books.sort((a, b) => a.preco - b.preco);
    displayBooks(sortedBooks);
}