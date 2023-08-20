const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

let movies = document.querySelector('.movies')

const getMovies = async (api) => {
    let response = await fetch(api)
    let data = await response.json()
    showMovies(data.results)
    console.log(data)
}
const showMovies = (data) => {
    movies.innerHTML = "";
    data.forEach(item => {
        const movieBox = document.createElement('div');
        movieBox.classList.add("box");
        movieBox.innerHTML = `
             <img src="${IMGPATH + item.backdrop_path}" alt="movie img">
                 <div class="content">
                    <div class="text">
                        <p class="title">${item.original_title}</p>
                        <p class="rate">${item.vote_average}</p>
                    </div>
                    <p>${item.overview}</p> `;

        movies.appendChild(movieBox)

    });
}

document.querySelector('#search').addEventListener("keyup", function (event) {
    if (event.target.value !== "") {
        getMovies(SEARCHAPI + event.target.value)
    } else {

    }

})
getMovies(APIURL)


