let livros = [];
const endepointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscasLivrosDaAPI();

const elementosParaInserirLivros = document.getElementById("livros");


async function getBuscasLivrosDaAPI() {
    const res = await fetch(endepointDaAPI);
    livros = await res.json();
    console.table(livros);
    exibirLivrosNaTela(livros);
}

function exibirLivrosNaTela(listaDeLivros) {
    listaDeLivros.forEach(livro => {
        elementosParaInserirLivros.innerHTML += 
        `<div class="livro">
      <img class="livro__imagens" src="${livro.imagem}" alt="${livro.alt}"/>
      <h2 class="livro__titulo">
        ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>`;
    });
}
