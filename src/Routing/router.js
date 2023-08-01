import {createBrowserRouter} from "react-router-dom";
import MoviesPage from "../components/MoviesPage/MoviesPage";
import MovieList from "../components/MovieList/MovieList";
import MovieListCard from "../components/MovieListCard/MovieListCard";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MoviesPage/>,
        children: [
            {
                path: "/list/",
                element: <MovieList/>,
                children: [
                    {
                        path: 'movie/:id',
                        element: <MovieListCard/>,
                    }
                ]
            },
        ]
    },

]);