import React, {useEffect, useState} from 'react';
import {moviesServices} from "../../services/moviesServices";
import Genre from "./Genre/Genre";
import genre from "./Genre/Genre";

const GenreBadge = ({genre_ids}) => {
        const [genres, setGenres] = useState([]);

        useEffect(() => {
            moviesServices.getGenres().then(({data}) => {
                setGenres(data.genres)
            })
        }, [])

        const genreNames = [];
        for (const genre of genres) {
            for (const genreId of genre_ids) {
                if (genre.id === genreId) {
                    genreNames.push(genre.name)
                }
            }
        }

        return (
            <div>
                <h4>Genres: {genreNames.join(', ')}</h4>
            </div>
        );
    }
;

export default GenreBadge;