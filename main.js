import TmdbApi from './tmdb.js';

const api = new TmdbApi();
const movieList = document.getElementById('movie-list');
const searchForm = document.getElementById('search-form');
const queryInput = document.getElementById('query');

let currentPage = 1;
let totalPages = 1;
let currentQuery = '';

function displayMovies(movies) {
    movieList.innerHTML = '';

    if (movies && movies.length > 0) {
        movies.forEach(movie => {
            const li = document.createElement('li');
            const poster = movie.poster_path ? `<img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="${movie.title}">` : '';
            const description = movie.overview ? `<p>${movie.overview.substring(0, 100)}...</p>` : '<p>Description indisponible</p>';
            li.innerHTML = `
                ${poster}
                <h3>${movie.title} (${movie.release_date ? movie.release_date.slice(0, 4) : 'Date inconnue'})</h3>
                ${description}
            `;
            movieList.appendChild(li);
        });
    } else {
        movieList.innerHTML = '<p>Aucun film trouvé.</p>';
    }
}

async function showDiscoverMovies(page = 1) {
    try {
        const movies = await api.discoverMovies(page);
        if (movies && movies.results) {
            totalPages = movies.total_pages;
            displayMovies(movies.results);
        } else {
            movieList.innerHTML = '<p>Problème avec les résultats de l\'API.</p>';
        }
    } catch (error) {
        movieList.innerHTML = '<p>Erreur lors de la récupération des films.</p>';
    }
}

async function searchMovies(event) {
    if (event) {
        event.preventDefault();
        currentQuery = queryInput.value.trim();
    }

    if (currentQuery) {
        try {
            const movies = await api.searchMovies(currentQuery, currentPage);
            if (movies && movies.results) {
                totalPages = movies.total_pages;
                displayMovies(movies.results);
            } else {
                movieList.innerHTML = '<p>Aucun film trouvé.</p>';
            }
        } catch (error) {
            movieList.innerHTML = '<p>Erreur lors de la recherche des films.</p>';
        }
    }
}

function changePage(newPage) {
    if (newPage >= 1 && newPage <= totalPages) {
        currentPage = newPage;
        searchMovies();
        updatePaginationButtons();
    }
}

function updatePaginationButtons() {
    document.getElementById('prevPage').disabled = currentPage === 1;
    document.getElementById('nextPage').disabled = currentPage === totalPages;
}

document.getElementById('prevPage').addEventListener('click', () => changePage(currentPage - 1));
document.getElementById('nextPage').addEventListener('click', () => changePage(currentPage + 1));

searchForm.addEventListener('submit', searchMovies);
document.addEventListener('DOMContentLoaded', () => showDiscoverMovies(currentPage));
