import React from 'react';
import PosterPreview from "../PosterPreview/PosterPreview";
import GenreBadge from "../GenreBadge/GenreBadge";

const MovieInfo = ({movie}) => {
    const {title, overview, genre_ids} = movie
    console.log(genre_ids)
    return (
        <div style={{'width': '30%'}}>
            <h1>{title}</h1>
            <PosterPreview movie={movie}/>
            <h3>{overview}</h3>
            <h3>genre_ids: {genre_ids.join(' ,')}</h3>
        </div>
    );
};

export default MovieInfo;