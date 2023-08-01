import {createBrowserRouter} from "react-router-dom";
import MoviesPage from "../components/MoviesPage/MoviesPage";
import MovieListCard from "../components/MovieListCard/MovieListCard";
import GenreBadge from "../components/GenreBadge/GenreBadge";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MoviesPage/>,
    },
    {
        path: '/movie',
        element: <MovieListCard/>,
    }
]);