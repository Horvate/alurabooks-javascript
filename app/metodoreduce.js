export function calculateTotalPrice(books) {
    return books.reduce((acc, book) => acc + book.price, 0).toFixed(2);
}