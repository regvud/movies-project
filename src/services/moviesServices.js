import {apiServices} from "./apiServices";
import {urls} from "../constants/urls";
import {token} from "../constants/token/token";

export const moviesServices = {
    getMovies: (page) => (apiServices.get(`${urls.movies.base}`, {
        params: {page},
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })),
    // https://api.themoviedb.org/3/movie/76341?api_key=ec284ac475e73003937a013799648b1a
    getMovieById: (id) => (apiServices.get(`${urls.movies.byID}${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`,
        }
    })),
    getGenres: () => (apiServices.get(`${urls.genres.base}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }))
}
