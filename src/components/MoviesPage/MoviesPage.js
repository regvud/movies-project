import React, {useContext} from 'react';
import MovieList from "../MovieList/MovieList";
import {Context} from "../HOC/ContextProvider";
import MovieListCard from "../MovieListCard/MovieListCard";
import Navbar from "../Header/Navbar/Navbar";


const MoviesPage = () => {
    const {trigger} = useContext(Context)

    return (
        <div>
            <Navbar/>
            {trigger ?
                <MovieListCard/> :
                <MovieList/>}
            {/*/todo better verification*/}
            {/*<MovieList/>*/}
            {/*<MovieListCard/>*/}
            {/*<GenreBadge/>*/}
            {/*<PosterPreview/>*/}
        </div>
    );
};

export default MoviesPage;