import React, {useContext} from 'react';
import {NavLink, Outlet} from "react-router-dom";
import MoviesPage from "../../MoviesPage/MoviesPage";
import MovieList from "../../MovieList/MovieList";
import MovieListCard from "../../MovieListCard/MovieListCard";
import {Context} from "../../HOC/ContextProvider";
import styles from '../../MovieList/MovieList.module.css'

const Navbar = () => {
    const {listTrigger, setListTrigger} = useContext(Context)
    return (
        <div className={styles.movieList}>
            <NavLink to={'/'} onClick={() => setListTrigger(prev => !prev)}>Main</NavLink>
            <NavLink to={'/list'} onClick={() => setListTrigger(prev => !prev)}>List</NavLink>
            <Outlet></Outlet>
            {/*{console.log(listTrigger)}*/}
        </div>
    );
};

export default Navbar;