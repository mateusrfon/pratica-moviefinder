MoviesAquisition();

function MoviesAquisition() {
    const promessa = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/moviefinder/filmes');
    promessa.then(ReceiveMovies)
}

function ReceiveMovies(movies) {
    const moviesList = movies.data;
    const moviesContainer = document.querySelector('.movies')
    moviesContainer.innerHTML = '';

    for (let i=0; i<moviesList.length; i++){
        moviesContainer.innerHTML += `
        <div class="movie">
            <img src="${moviesList[i].imagem}">
            <div class="title">${moviesList[i].titulo}</div>
            <button onclick="Buy(${moviesList[i].id})">
                Comprar
                <ion-icon name="cart-outline"></ion-icon>
            </button>
        </div>
        `;
    }
}

function Buy(id) {
    const purchase = {};
    purchase.nome = prompt('Qual o seu nome?')
    purchase.quantidade = prompt('Quantos assentos deseja?')

    const promessa = axios.post(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/moviefinder/filmes/${id}/ingresso`,
        purchase
    );

    promessa.then(PurchaseSuccess)
    promessa.catch(PurchaseError)
}

function PurchaseSuccess(){
    alert("Ingresso comprado com sucesso!");
}

function PurchaseError() {
    alert("Os ingressos para este filme estão esgotados!");
}