import React, {useEffect, useState} from 'react';
import {moviesServices} from "../../services/moviesServices";
import MovieListCard from "../MovieListCard/MovieListCard";
import MovieInfo from "../MovieInfo/MovieInfo";

const MovieList = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        moviesServices.getMovies().then(({data}) => setMovies(data.results))
    }, [])

    return (
        <div>
            {/*{movies?.map((movie, id) => (<MovieListCard movie={movie} key={id}/>))}*/}
            {movies?.map((movie, id) => (<MovieInfo movie={movie} key={id}/>))}

        </div>
    );
};

export default MovieList;