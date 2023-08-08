import {createBrowserRouter} from "react-router-dom";
import MovieList from "../components/MovieList/MovieList";
import MovieListCard from "../components/MovieListCard/MovieListCard";
import {ROUTES} from "./Routes";
import MoviesPage from "../components/MoviesPage/MoviesPage";
import GenreBadge from "../components/GenreBadge/GenreBadge";

export const router = createBrowserRouter([
        {
            path: ROUTES.MAIN,
            element: <MoviesPage/>,
            children: [
                {
                    path: ROUTES.LIST,
                    element: <MovieList/>,
                },
                {
                    path: ROUTES.MOVIE,
                    element: <MovieListCard/>,
                },
                {
                    path: '/genres',
                    element: <GenreBadge/>,
                },
            ]
        },
    ])
;