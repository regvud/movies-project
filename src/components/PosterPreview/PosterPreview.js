import React, {useState} from 'react';
import {postURL} from "../../constants/urls";
import {router} from "../../Routing/router";

const PosterPreview = ({poster_path, title, movie}) => {
    const [trigger, setTrigger] = useState(false)

    // console.log(movie)

    const navigate = (id) => {
        // return (router.navigate('/movie'))
        console.log('navigate')
    }


    return (
        <div>
            <img src={`${postURL}${poster_path}`} alt={title} onClick={() => navigate(movie.id)}/>
        </div>
    )

};


export default PosterPreview;