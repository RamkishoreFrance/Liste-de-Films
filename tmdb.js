class TmdbApi {
    constructor() {
        this.token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OWJiYTNkYmRhY2VjYWYwMmExNGNmZWQ3ZTI3NmMxNyIsIm5iZiI6MTcyOTg2MDg5Mi4yNTc1Nywic3ViIjoiNjcxYjk0NDRjNzgwMmNjNTAzNTlmZjc5Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.7o-WRSSEdG-vXKYC3UrtSGJ2j0DiIsDzT9ybLzNN-ec';
        this.baseUrl = 'https://api.themoviedb.org/3';
    }

    async discoverMovies(page = 1) {
        try {
            const response = await fetch(`${this.baseUrl}/discover/movie?page=${page}`, {
                headers: {
                    Authorization: `Bearer ${this.token}`,
                    'Content-Type': 'application/json;charset=utf-8'
                }
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Erreur lors de la récupération des films à découvrir:', error);
        }
    }

    async searchMovies(query, page = 1) {
        try {
            const response = await fetch(`${this.baseUrl}/search/movie?query=${encodeURIComponent(query)}&page=${page}`, {
                headers: {
                    Authorization: `Bearer ${this.token}`,
                    'Content-Type': 'application/json;charset=utf-8'
                }
            });
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Erreur lors de la recherche de films:', error);
        }
    }
}

export default TmdbApi;
