import {createBrowserRouter} from "react-router-dom";
import MoviesPage from "../components/MoviesPage/MoviesPage";
import MovieListCard from "../components/MovieListCard/MovieListCard";
import GenreBadge from "../components/GenreBadge/GenreBadge";
import MovieList from "../components/MovieList/MovieList";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MovieList/>,
    },
    {
        path: '/movie',
        element: <MovieListCard/>,
    }
]);