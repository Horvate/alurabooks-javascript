import { sortByPriceButton, buttons } from "../element.js";
import { sortBooksByPrice } from "../services/books.js";
import { handleFilterClick } from "../metodoFilter.js";
import { displayBooks } from "../metodoForEach.js";
import { books } from "../state.js";

export function registerEvents() {
    buttons.forEach(btn => btn.addEventListener("click", handleFilterClick));
    if (sortByPriceButton) {
         sortByPriceButton.addEventListener('click', () => {
            const sortedBooks = sortBooksByPrice(books);
            displayBooks(sortedBooks);
         });
    }
}