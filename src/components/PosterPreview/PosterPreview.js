import React, {useContext} from 'react';
import {postURL} from "../../constants/urls";
import {router} from "../../Routing/router";
import {MovieContext} from "../MoviesPage/MoviesPage";

const PosterPreview = ({poster_path, title}) => {
    const {setTrigger} = useContext(MovieContext)
    // console.log(movie)

    const navigate = (id) => {
        return router.navigate(`/movie/${id}`)
    }


    return (
        <div>
            <img src={`${postURL}${poster_path}`} alt={title} onClick={setTrigger(prev => !prev)}/>
        </div>
    )

};

export default PosterPreview;