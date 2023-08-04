import React, {useContext, useEffect, useState} from 'react';
import {moviesServices} from "../../services/moviesServices";
import MovieInfo from "../MovieInfo/MovieInfo";
import {Context} from "../HOC/ContextProvider";
import styles from './MovieList.module.css'
import {Outlet} from "react-router-dom";

const MovieList = () => {
        const {movies, setMovies, listTrigger} = useContext(Context)
        const [page, setPage] = useState(1)

        useEffect(() => {
            moviesServices.getMovies(page).then(({data}) => setMovies(data.results))
        }, [listTrigger, page])

        const usePageChange = () => {

            useEffect(() => {
                setPage(prevState => ++prevState)
            }, [page]);
        }

        return (
            <>
                <div>
                    <button onClick={() => usePageChange()}>Previous</button>
                    {/*<button onClick={usePageChange()}>Next</button>*/}
                </div>
                <div className={styles.movieList}>
                    {movies?.map((movie, id) => (<MovieInfo movie={movie} key={id}/>))}
                    <Outlet></Outlet>
                </div>
            </>
        );
    }
;

export default MovieList;