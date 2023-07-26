import {createBrowserRouter} from "react-router-dom";
import MoviesPage from "../components/MoviesPage/MoviesPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MoviesPage/>,
    },
]);