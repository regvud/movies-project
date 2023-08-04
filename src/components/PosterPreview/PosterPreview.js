import React, {useContext} from 'react';
import {postURL} from "../../constants/urls";
import {useNavigate} from "react-router-dom";
import {Context} from "../HOC/ContextProvider";
import {ROUTES} from "../../Routing/Routes";
import styles from '../MovieInfo/MovieInfo.module.css'

const PosterPreview = ({movie}) => {
    const {title, poster_path, id} = movie
    const {setMovieId} = useContext(Context)
    const navigate = useNavigate();

    const navigateTo = (id) => {
        setMovieId(id)
        navigate(`${ROUTES.MOVIE}${id}`)
    }
    return (
        <div className={styles.image}>
            <img src={`${postURL}${poster_path}`} alt={title} onClick={() => navigateTo(id)}/>
        </div>
    )

};

export default PosterPreview;