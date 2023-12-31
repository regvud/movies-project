import React, {useEffect, useState} from 'react';
import {moviesServices} from "../../services/moviesServices";
import MovieInfo from "../MovieInfo/MovieInfo";
import styles from './MovieList.module.css'

const MovieList = () => {
        const [movies, setMovies] = useState([])
        const [page, setPage] = useState(1)

        useEffect(() => {
            moviesServices.getMovies(page).then(({data}) => setMovies(data.results))
        }, [page])

        const pageChange = (action) => {
            if (action === 'next') {
                return setPage(prevState => ++prevState)
            } else {
                return setPage(prevState => --prevState)
            }
        }

        return (
            <>
                {page > 1 ?
                    <div className={styles.buttonsDiv}>
                        <button className={styles.buttons} onClick={() => pageChange('prev')}>Previous</button>
                        <button className={styles.buttons} onClick={() => pageChange('next')}>Next</button>
                    </div> :
                    <div className={styles.buttonsDiv}>
                        <button className={styles.buttons} onClick={() => pageChange('next')}>Next</button>
                    </div>
                }
                <div className={styles.movieList}>
                    {movies?.map((movie, id) => (<MovieInfo movie={movie} key={id}/>))}
                </div>
            </>
        );
    }
;

export default MovieList;