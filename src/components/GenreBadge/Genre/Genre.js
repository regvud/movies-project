import React from 'react';

const Genre = ({genre}) => {
    const {id, name} = genre
    return (
        <div>
            <hr/>
            <h3>Genre ID: {id}</h3>
            <h3>Genre Name: {name}</h3>
        </div>
    );
};

export default Genre;