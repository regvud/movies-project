import React from 'react';
import {Outlet} from "react-router-dom";


const MoviesPage = () => {
    return (
        <div>
            <h1>MoviesPage</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default MoviesPage;