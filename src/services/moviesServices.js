import {apiServices} from "./apiServices";
import {baseURL, urls} from "../constants/urls";
import {token} from "../constants/token/token";

export const moviesServices = {
    getMovies: () => (apiServices.get(`${baseURL}${urls.movies.base}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })),
    // https://api.themoviedb.org/3/movie/76341?api_key=ec284ac475e73003937a013799648b1a
    getMovieById: (id) => (apiServices.get(`${baseURL}/movie${id}?api_key=ec284ac475e73003937a013799648b1a`, {
        headers: {
            'Authorization': `Bearer ${token}`,
        }
    })),
    getGenres: () => (apiServices.get(`${baseURL}${urls.genres.base}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }))
}
