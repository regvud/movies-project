import React, {useEffect, useState} from 'react';
import {moviesServices} from "../../services/moviesServices";
import Genre from "./Genre/Genre";
import genre from "./Genre/Genre";

const GenreBadge = ({genre_ids}) => {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        moviesServices.getGenres().then(({data}) => setGenres(data))
    }, [])
    console.log(genre_ids);
    return (
        <div>
            {/*{genres.map((genre, id) => (<Genre genre={genre} key={id}/>))}*/}
            {/*{genres.map((genre, id) =>}*/}
        </div>
    );
};

export default GenreBadge;