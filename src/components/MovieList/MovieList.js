import React from 'react';
import {moviesServices} from "../../services/moviesServices";
import axios from "axios";
import {token} from "../../constants/token/token";

const MovieList = () => {
    moviesServices.getMovies()
    return (
        <div>

        </div>
    );
};

export default MovieList;