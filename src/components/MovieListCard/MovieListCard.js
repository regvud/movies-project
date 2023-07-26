import React, {useEffect, useState} from 'react';
import {postersServices} from "../../services/postersServices";

const MovieListCard = ({movie}) => {
    const {id, title, release_date, adult, poster_path, original_language, overview} = movie
    const [img, setImg] = useState(null);
    useEffect(() => {
        postersServices.getPost(poster_path).then(({data}) => setImg(data))
    }, [])
    return (
        <div>
            <hr/>
            <h3>{id}</h3>
            <h3>{title}</h3>
            <h3>{release_date}</h3>
            <h3>{adult}</h3>
            <h3>{original_language}</h3>
            <p>{overview}</p>
            <img src={poster_path} alt={title}/>
        </div>
    );
};

export default MovieListCard;