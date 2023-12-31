export const baseURL = 'https://api.themoviedb.org/3'
export const postURL = 'https://image.tmdb.org/t/p/w500/'

const movies = '/discover/movie/'
export const urls = {
    movies: {
        base: movies,
        byID: (id) => `/movie/${id}`
    },
    genres: {
        base: '/genre/movie/list'
    },
}