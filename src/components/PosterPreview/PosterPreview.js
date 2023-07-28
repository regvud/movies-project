import React, {useEffect, useState} from 'react';
import {postURL} from "../../constants/urls";
import {redirect} from "react-router-dom";

const PosterPreview = ({poster_path, title, movie}) => {
    const [trigger, setTrigger] = useState(false)

    const loader = async () => {
        if (trigger) {
            return redirect("/genre");
        }
        return null;
    };

    return (
        <div>
            <img src={`${postURL}${poster_path}`} alt={title} onClick={() => {
                setTrigger(prevState => !prevState)
                loader().then(value => console.log(value))
            }}/>
            {/*{trigger ? return redirect() : return false}*/}
        </div>
    )

};


export default PosterPreview;