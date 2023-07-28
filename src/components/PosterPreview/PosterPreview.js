import React, {useEffect, useState} from 'react';
import axios from "axios";
import {token} from "../../constants/token/token";
import {postersServices} from "../../services/postersServices";
import {postURL} from "../../constants/urls";

const PosterPreview = ({poster_path, title}) => {
    return (
        <div>
            <img src={`${postURL}${poster_path}`} alt={title}/>
        </div>
    );

};


export default PosterPreview;