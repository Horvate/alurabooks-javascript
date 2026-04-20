export function mapBooks(book) {
    return {
        title: book.titulo,
        price: book.preco,
        category: book.categoria,
        image: book.imagem,
        avaliable: book.quantidade > 0,
        author: book.autor,
    };
}