import React, {useContext, useEffect} from 'react';
import {moviesServices} from "../../services/moviesServices";
import MovieInfo from "../MovieInfo/MovieInfo";
import {MovieContext} from "../MoviesPage/MoviesPage";

const MovieList = () => {
        const {movies, setMovies} = useContext(MovieContext);
        useEffect(() => {
            moviesServices.getMovies().then(({data}) => setMovies(data.results))
        }, [])

        return (
            <div>
                {movies?.map((movie, id) => (<MovieInfo movie={movie} key={id}/>))}
            </div>
        );
    }
;

export default MovieList;