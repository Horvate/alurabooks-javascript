import { buttons, sortByPriceButton } from "../element.js";
import { sortBooksByPrice } from "../services/booksService.js";
import { handleFilterClick } from "../controllers/filterController.js";
import { displayBooks } from "../ui/displayBooks.js";
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