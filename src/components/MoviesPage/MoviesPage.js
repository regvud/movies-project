import React from 'react';
import {Outlet} from "react-router-dom";
import Navbar from "../Header/Navbar/Navbar";

const MoviesPage = () => {
    return (
        <div>
            <Navbar/>
            <Outlet></Outlet>
        </div>
    );
};

export default MoviesPage;