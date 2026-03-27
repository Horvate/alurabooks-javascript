const sortByPriceButton = document.getElementById("btnOrdenarPorPreco");

sortByPriceButton.addEventListener('click', sortBooksByPrice);

function sortBooksByPrice() {
    let sortedBooks = books.sort((a, b) => a.preco - b.preco);
    displayBooks(sortedBooks);
}