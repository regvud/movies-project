import React, {createContext, useState} from 'react';
import MovieList from "../MovieList/MovieList";
import GenreBadge from "../GenreBadge/GenreBadge";
import {Outlet} from "react-router-dom";

export const MovieContext = createContext(null);
const MoviesPage = () => {
    const [movies, setMovies] = useState([])
    return (
        <div>
            <MovieContext.Provider value={{movies, setMovies}}>
                {/*HEADER*/}
                <MovieList/>
                {/*<GenreBadge/>*/}
                {/*<PosterPreview/>*/}
            </MovieContext.Provider>

        </div>
    );
};

export default MoviesPage;