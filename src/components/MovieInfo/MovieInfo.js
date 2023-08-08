import React from 'react';
import PosterPreview from "../PosterPreview/PosterPreview";
import styles from './MovieInfo.module.css'
import StarsRatingBadge from "../StarsRatingBadge/StarsRatingBadge";
import GenreBadge from "../GenreBadge/GenreBadge";

const MovieInfo = ({movie}) => {
    const {title, overview, vote_average, genre_ids} = movie
    return (
        <div className={styles.card}>
            <h2>{title}</h2>
            <PosterPreview movie={movie}/>
            <GenreBadge genre_ids={genre_ids}/>
            <StarsRatingBadge vote_average={vote_average}/>
            <p>{overview}</p>
        </div>
    );
};

export default MovieInfo;