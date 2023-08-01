import React, {useContext} from 'react';
import {postURL} from "../../constants/urls";
import {router} from "../../Routing/router";
import {MovieContext} from "../MoviesPage/MoviesPage";

const PosterPreview = ({movie}) => {
    const {title, poster_path, id} = movie
    const {movieId, setMovieId} = useContext(MovieContext)
    const navigate = (id) => {
        setMovieId(id)
        return router.navigate(`/movie`)
    }
    return (
        <div>
            <img src={`${postURL}${poster_path}`} alt={title} onClick={() => navigate(id)}/>
        </div>
    )

};

export default PosterPreview;