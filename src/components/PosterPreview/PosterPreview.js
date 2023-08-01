import React, {useContext} from 'react';
import {postURL} from "../../constants/urls";
import {useNavigate} from "react-router-dom";
import {Context} from "../HOC/ContextProvider";

const PosterPreview = ({movie}) => {
    const {title, poster_path, id} = movie
    const {setMovieId, setTrigger} = useContext(Context)
    const navigate = useNavigate();

    const navigateTo = (id) => {
        setMovieId(id)
        setTrigger(prev => !prev)
        navigate(`list/movie/${id}`)
    }
    return (
        <div>
            <img src={`${postURL}${poster_path}`} alt={title} onClick={() => navigateTo(id)}/>
        </div>
    )

};

export default PosterPreview;