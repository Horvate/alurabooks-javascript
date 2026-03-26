let books = [];
const apiEndpoint = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
fetchBooksFromAPI();
init();

async function fetchBooksFromAPI() {
    const response = await fetch(apiEndpoint);
    if (!response.ok) {
        throw new Error('Error retrieving data from API');
    }
    return response.json();
}

async function init() {
    try {
        books = await fetchBooksFromAPI();
        const booksWithDiscount = applyDiscount(books);
        exibirLivrosNaTela(booksWithDiscount);
    }catch (error) {
        console.error(error);
    }
}