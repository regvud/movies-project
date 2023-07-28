import React, {useEffect, useState} from 'react';
import {postersServices} from "../../services/postersServices";
import {postURL} from "../../constants/urls";
import genre from "../GenreBadge/Genre/Genre";
import {logDOM} from "@testing-library/react";

const MovieListCard = ({movie}) => {
    const {
        adult,
        backdrop_path,
        genre_ids,
        id,
        original_language,
        original_title,
        overview,
        popularity,
        poster_path,
        release_date,
        title,
        video,
        vote_average,
        vote_count
    } = movie
    // const [img, setImg] = useState(null);
    // useEffect(() => {
    //     postersServices.getPost(poster_path).then(({data}) => setImg(data))
    // }, [])

    const genresArr = [];
    genre_ids.forEach(genre => genresArr.push(genre))
    console.log(genresArr)

    return (
        <div>
            <hr/>
            <h1>{title}</h1>
            <img src={`${postURL}${poster_path}`} alt={title}/>
            <h3>adult: {adult ? 'true' : 'false'}</h3>
            <h3>genre_ids: {genresArr.join(',')}</h3>
            <h3>id: {id}</h3>
            <h3>original_language: {original_language}</h3>
            <h3>original_title: {original_title}</h3>
            <p><b>overview:</b> {overview}</p>
            <h3>popularity: {popularity}</h3>
            <h2>release_date: {release_date}</h2>
            <h3>video: {video ? 'true' : 'false'}</h3>
            <h3>vote_average: {vote_average}</h3>
            <h3>vote_count: {vote_count}</h3>
            <img src={`${postURL}${backdrop_path}`} alt={title}/>
        </div>
    );
};

export default MovieListCard;