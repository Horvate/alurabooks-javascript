import { displayTotalPrice } from "../ui/displayBooks.js";

export function applyDiscount(booksList, discountRate = 0.3) {
    return booksList.map(book => {
        const discountedPrice = book.price * (1 - discountRate);
        return {
            ...book,
            price: Number(discountedPrice.toFixed(2))
        };
    });
}

export function calculateTotalPrice(booksList) {
    return Number(
        booksList.reduce((acc, book) => acc + book.price, 0).toFixed(2)
    );
}

export function sortBooksByPrice(booksList) {
    return [...booksList].sort((a, b) => a.price - b.price);
}

export const filterBooksByCategory = (selectedCategory, books) => {
    return selectedCategory === "disponivel"
        ? books.filter(livro => livro.avaliable > 0)
        : books.filter(livro => livro.category === selectedCategory);
}

export const handleAvailableBooks = (selectedCategory, filterBooks) => {
    if (selectedCategory === "disponivel") {
        const totalValue = calculateTotalPrice(filterBooks);
        displayTotalPrice(totalValue);
    }
}