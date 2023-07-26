import {apiServices} from "./apiServices";
import {urls} from "../constants/urls";
import {token} from "../constants/token/token";

export const moviesServices = {
    getMovies: () => {
        apiServices.get(urls.movies.base, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json'
            }
        })
    }
}

// axios.get('https://api.themoviedb.org/3/discover/movie',
//     {
//         headers: {
//             'Authorization': `Bearer ${token}`
//         }
//     })
//     .then(({data}) => console.log(data))