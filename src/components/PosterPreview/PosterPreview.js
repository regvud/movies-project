import React, {useEffect, useState} from 'react';
import axios from "axios";
import {token} from "../../constants/token/token";

const PosterPreview = () => {
    const [post, setPost] = useState(null);
    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/346698/images', {
            headers: {
                'Authorization': `Bearer ${token}`,
                'accept': 'application/json'
            },
        }).then(({data}) => setPost(data.posters[0].file_path))
    }, [])
    return (
        <div>
            <h1>ewqdwqd</h1>
            <img src='http://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg' alt=""/>
        </div>
    );
};

export default PosterPreview;