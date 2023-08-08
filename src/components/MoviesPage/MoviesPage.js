import React, {useContext} from 'react';
import {Outlet} from "react-router-dom";
import Navbar from "../Header/Navbar/Navbar";
import {Context} from "../HOC/ContextProvider";

const MoviesPage = () => {
    const {theme, setTheme} = useContext(Context)
    return (
        <div style={{background: !theme ? 'white' : '#463E3F', height:'100%'}}>
            <Navbar/>
            <button style={{width:'100px', height:'30px', marginLeft:'45px'}} onClick={() => setTheme(prev => !prev)}>THEME</button>
            <Outlet></Outlet>
        </div>
    );
};

export default MoviesPage;