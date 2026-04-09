import { displayBooks } from "./metodoForEach.js";
import { books } from "./api.js";

export function sortBooksByPrice() {
    let sortedBooks = books.sort((a, b) => a.price - b.price);
    displayBooks(sortedBooks);
}