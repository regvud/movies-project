import React, {useContext, useEffect, useState} from 'react';
import {postURL} from "../../constants/urls";
import {moviesServices} from "../../services/moviesServices";
import {Context} from "../HOC/ContextProvider";
import {useLocation, useNavigate} from "react-router-dom";
import {ROUTES} from "../../Routing/Routes";

const MovieListCard = () => {
    const {movieId} = useContext(Context)
    const [film, setFilm] = useState(null)

    useEffect(() => {
        moviesServices.getMovieById(movieId).then(({data}) => setFilm(data))
    }, [movieId])

    if (film) {
        const {
            adult,
            backdrop_path,
            genres, //todo
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
        } = film

        let genresArr = []
        genres.forEach(value => genresArr.push(value.name))
        return (
            <div>
                <h1>{title}</h1>
                <img src={`${postURL}${poster_path}`} alt={title}/>
                <h3>adult: {adult ? 'true' : 'false'}</h3>
                <h3>genres: {genresArr.join(', ')}</h3>
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
    }
};

export default MovieListCard;
