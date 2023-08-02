import React, {useContext} from 'react';
import {postURL} from "../../constants/urls";
import {useNavigate} from "react-router-dom";
import {Context} from "../HOC/ContextProvider";
import {ROUTES} from "../../Routing/Routes";

const PosterPreview = ({movie}) => {
    const {title, poster_path, id} = movie
    const {setMovieId, setMovieTrigger} = useContext(Context)
    const navigate = useNavigate();

    const navigateTo = (id) => {
        setMovieId(id)
        // setMovieTrigger(prev => !prev)
        navigate(`${ROUTES.MOVIE}`)
    }
    return (
        <div>
            <img src={`${postURL}${poster_path}`} alt={title} onClick={() => navigateTo(id)}/>
        </div>
    )

};

export default PosterPreview;