import React, {useEffect, useState} from 'react';
import {moviesServices} from "../../services/moviesServices";
import MovieListCard from "../MovieListCard/MovieListCard";

const MovieList = () => {
    const [movies, setMovies] = useState([])
    const [mov, setMov] = useState([])

    useEffect(() => {
        moviesServices.getMovies().then(({data}) => setMovies(data.results))
    }, [])

    return (
        <div>
            {movies?.map((movie, id) => (<MovieListCard movie={movie} key={id}/>))}

        </div>
    );
};

export default MovieList;