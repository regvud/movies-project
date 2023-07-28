import React, {useEffect, useState} from 'react';
import {postURL} from "../../constants/urls";
import {Navigate, redirect} from "react-router-dom";
import MovieListCard from "../MovieListCard/MovieListCard";

const PosterPreview = ({poster_path, title, movie}) => {
    const [trigger, setTrigger] = useState(false)

    return (
        <div>
            <img src={`${postURL}${poster_path}`} alt={title} onClick={() => {
                setTrigger(prevState => !prevState)
            }}/>
            {trigger ? <Navigate to='/movie'/> : false}
        </div>
    )

};


export default PosterPreview;