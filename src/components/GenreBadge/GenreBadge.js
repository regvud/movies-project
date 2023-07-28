import React, {useEffect, useState} from 'react';
import {moviesServices} from "../../services/moviesServices";
import Genre from "./Genre/Genre";

const GenreBadge = () => {
    const [genres, setGenres] = useState([]);
    useEffect(() => {
        moviesServices.getGenres().then(({data}) => setGenres(data.genres))
    }, [])
    console.log(genres)
    return (
        <div>
            {genres.map((genre, id) => (<Genre genre={genre} key={id}/>))}
        </div>
    );
};

export default GenreBadge;