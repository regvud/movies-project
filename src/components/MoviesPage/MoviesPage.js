import React, {createContext, useState} from 'react';
import MovieList from "../MovieList/MovieList";
import GenreBadge from "../GenreBadge/GenreBadge";
import MovieListCard from "../MovieListCard/MovieListCard";

export const MovieContext = createContext(null);
const MoviesPage = () => {
    const [movies, setMovies] = useState([])
    const [trigger, setTrigger] = useState(false)
    const [movieId, setMovieId] = useState(null)
    return (
        <div>
            <MovieContext.Provider value={{movies, setMovies, setTrigger, movieId, setMovieId}}>
                {/*HEADER*/}
                <MovieList/>
                {/*<GenreBadge/>*/}
                {/*<PosterPreview/>*/}
            </MovieContext.Provider>

        </div>
    );
};

export default MoviesPage;