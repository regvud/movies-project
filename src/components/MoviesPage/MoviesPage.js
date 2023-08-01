import React, {useContext} from 'react';
import MovieList from "../MovieList/MovieList";
import ContextProvider, {Context} from "../HOC/ContextProvider";
import MovieListCard from "../MovieListCard/MovieListCard";


const MoviesPage = () => {
    const {movieId} = useContext(Context)
    return (
        <div>
            {/*HEADER*/}
            {movieId ? <MovieListCard/> : <MovieList/>} //todo better verification
            {/*<MovieList/>*/}
            {/*<MovieListCard/>*/}
            {/*<GenreBadge/>*/}
            {/*<PosterPreview/>*/}
        </div>
    );
};

export default MoviesPage;