const apiEndpoint = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

export async function fetchBooksFromAPI() {
    const response = await fetch(apiEndpoint);
    if (!response.ok) {
        throw new Error('Error retrieving data from API');
    }
    return response.json();
}