import React from 'react';
import MovieList from "../MovieList/MovieList";
import GenreBadge from "../GenreBadge/GenreBadge";

const MoviesPage = () => {
    return (
        <div>
            {/*HEADER*/}
            <MovieList/>
            {/*<GenreBadge/>*/}
            {/*<PosterPreview/>*/}
        </div>
    );
};

export default MoviesPage;