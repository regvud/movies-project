import React from 'react';
import MovieList from "../MovieList/MovieList";


const MoviesPage = () => {
    return (
        <div>
            {/*HEADER*/}
            <MovieList/>
            {/*<MovieListCard movieId={movieId}/>*/}
            {/*<GenreBadge/>*/}
            {/*<PosterPreview/>*/}
        </div>
    );
};

export default MoviesPage;