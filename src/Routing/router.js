import {createBrowserRouter} from "react-router-dom";
import MovieList from "../components/MovieList/MovieList";
import MovieListCard from "../components/MovieListCard/MovieListCard";
import Navbar from "../components/Header/Navbar/Navbar";
import {ROUTES} from "./Routes";
import MoviesPage from "../components/MoviesPage/MoviesPage";

export const router = createBrowserRouter([
        // {
        //     path: ROUTES.MAIN,
        //     element: <MoviesPage/>,
        //     children: [
        //         {
        //             element: <Navbar/>,
        //             children: [
        //                 {
        //                     path: ROUTES.LIST,
        //                     element: <MovieList/>
        //                 },
        //                 {
        //                     path: ROUTES.MOVIE,
        //                     element: <MovieListCard/>,
        //                 }
        //             ]
        //         },
        //     ]
        // },
        {
            path: ROUTES.MAIN,
            element: <Navbar/>,
            children: [
                {
                    path: ROUTES.LIST,
                    element: <MovieList/>
                },
                {
                    path: ROUTES.MOVIE,
                    element: <MovieListCard/>,
                }
            ]
        },

    ])
;