import { displayBooks } from "../ui/displayBooks.js";
import { applyDiscount } from "../services/booksService.js";
import { fetchBooksFromAPI } from "../api/booksApi.js";
import { mapBooks } from "../adapters/adapter.js";

export let books = [];

init();

async function init() {
    try {
        const data = await fetchBooksFromAPI();
        books = data.map(mapBooks);
        const booksWithDiscount = applyDiscount(books);
        displayBooks(booksWithDiscount);
    }catch (error) {
        console.error(error);
    }
}