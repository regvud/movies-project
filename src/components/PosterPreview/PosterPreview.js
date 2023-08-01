import React, {useContext} from 'react';
import {postURL} from "../../constants/urls";
import {Link, useNavigate} from "react-router-dom";
import MovieListCard from "../MovieListCard/MovieListCard";
import {router} from "../../Routing/router";
import ContextProvider from "../HOC/ContextProvider";

const PosterPreview = ({movie}) => {
    const {title, poster_path, id} = movie
    const {movieId, setMovieId} = useContext(ContextProvider)

    const navigate = useNavigate();
    const navigateTo = (id) => {
        setMovieId(id)
        navigate('/movie', {replace: true})
    }
    return (
        <div>
            <img src={`${postURL}${poster_path}`} alt={title} onClick={() => navigateTo(id)}/>
        </div>
    )

};

export default PosterPreview;