import React, {useContext, useEffect} from 'react';
import {moviesServices} from "../../services/moviesServices";
import MovieInfo from "../MovieInfo/MovieInfo";
import {Context} from "../HOC/ContextProvider";
import styles from './MovieList.module.css'

const MovieList = () => {
        const {movies, setMovies, listTrigger} = useContext(Context)

        useEffect(() => {
                moviesServices.getMovies().then(({data}) => setMovies(data.results))
        }, [listTrigger])

        return (
            <div className={styles.movieList}>
                {movies?.map((movie, id) => (<MovieInfo movie={movie} key={id}/>))}
            </div>
        );
    }
;

export default MovieList;