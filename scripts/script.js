const promessa = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/moviefinder/filmes');
promessa.then(ReceiveMovies)

function ReceiveMovies(movies) {
    const moviesList = movies.data;
    const moviesContainer = document.querySelector('.movies')
    moviesContainer.innerHTML = '';

    for (let i=0; i<moviesList.length; i++){
        moviesContainer.innerHTML += `
        <div class="movie">
            <img src="${moviesList[i].imagem}">
            <div class="title">${moviesList[i].titulo}</div>
            <button>
                Comprar
                <ion-icon name="cart-outline"></ion-icon>
            </button>
        </div>
        `;
    }
}