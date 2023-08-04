import React from 'react';
import PosterPreview from "../PosterPreview/PosterPreview";
import styles from './MovieInfo.module.css'

const MovieInfo = ({movie}) => {
    const {title, overview} = movie
    return (
        <div className={styles.card}>
            <h2>{title}</h2>
            <PosterPreview movie={movie}/>
            <p>{overview}</p>
        </div>
    );
};

export default MovieInfo;