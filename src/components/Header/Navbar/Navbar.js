import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import MoviesPage from "../../MoviesPage/MoviesPage";
import MovieList from "../../MovieList/MovieList";
import MovieListCard from "../../MovieListCard/MovieListCard";
import {Context} from "../../HOC/ContextProvider";

const Navbar = () => {
    const {setTrigger} = useContext(Context)
    return (
        <div>
            <NavLink to={'/list'} onClick={() => setTrigger(prev => !prev)}>List</NavLink>
        </div>
    );
};
//
// {
//     path: "",
//         element: <MoviesPage/>,
//     children: [
//     {
//         path: "/list",
//         element: <MovieList/>,
//     },
//     {
//         path: '/movie/:id',
//         element: <MovieListCard/>,
//     }
// ]
// },
export default Navbar;