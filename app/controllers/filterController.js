import { filterBooksByCategory, handleAvailableBooks } from "../services/booksService.js";
import { displayBooks } from "../ui/displayBooks.js";
import { books } from "../state.js";


export function handleFilterClick() {
    const selectedCategory = this.value;
    const filteredBooks = filterBooksByCategory(selectedCategory, books);
    displayBooks(filteredBooks);
    handleAvailableBooks(selectedCategory, filteredBooks);
}