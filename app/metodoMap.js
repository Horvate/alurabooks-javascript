export function applyDiscount(livros, discountRate = 0.3) {
return livros.map(livro => {
        const discountedPrice = livro.preco * (1 - discountRate);
        return {
            ...livro,
            preco: Number(discountedPrice.toFixed(2))
        };
    });
}