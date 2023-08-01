import React from 'react';
import PosterPreview from "../PosterPreview/PosterPreview";

const MovieInfo = ({movie}) => {
    const {title, overview} = movie

    return (
        <div style={{'width': '30%'}}>
            <h1>{title}</h1>
            <PosterPreview movie={movie}/>
            <h3>{overview}</h3>
        </div>
    );
};

export default MovieInfo;