import React, {useContext} from 'react';
import {postURL} from "../../constants/urls";
import {useNavigate} from "react-router-dom";
import {Context} from "../HOC/ContextProvider";

const PosterPreview = ({movie}) => {
    const {title, poster_path, id} = movie
    const {movieId, setMovieId} = useContext(Context)
    const navigate = useNavigate();

    const navigateTo = (id) => {
        setMovieId(id)
        navigate(`/movie/${id}`)

    }
    console.log(movieId)
    return (
        <div>
            <img src={`${postURL}${poster_path}`} alt={title} onClick={() => navigateTo(id)}/>
        </div>
    )

};

export default PosterPreview;