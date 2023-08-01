import React, {useContext, useEffect} from 'react';
import {moviesServices} from "../../services/moviesServices";
import MovieInfo from "../MovieInfo/MovieInfo";
import ContextProvider, {Context} from "../HOC/ContextProvider";

const MovieList = () => {
        const {movies, setMovies} = useContext(Context)

        useEffect(() => {
            moviesServices.getMovies().then(({data}) => setMovies(data.results))
        }, [])

        // const time = () => {
        //
        //     const timer = setInterval(() => {
        //         console.log(1)
        //     }, 1000)
        //
        //     return () => clearInterval(timer)
        //
        // }
        // time()
        return (
            <div>
                {movies?.map((movie, id) => (<MovieInfo movie={movie} key={id}/>))}
            </div>
        );
    }
;

export default MovieList;