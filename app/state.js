import { displayBooks } from "../app/metodoForEach.js";
import { applyDiscount } from "../app/metodoMap.js";
import { fetchBooksFromAPI } from "../app/service/api.js";

export let books = [];

fetchBooksFromAPI();
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

function mapBooks(book) {
    return {
        title: book.titulo,
        price: book.preco,
        category: book.categoria,
        image: book.imagem,
        avaliable: book.quantidade > 0,
        author: book.autor,
    };
}