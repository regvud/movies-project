import React, {createContext, useState} from 'react';

export const Context = createContext(null);
const ContextProvider = ({children}) => {
    const [movies, setMovies] = useState([])
    const [listTrigger, setListTrigger] = useState(false)
    const [movieTrigger, setMovieTrigger] = useState(false)
    const [movieId, setMovieId] = useState(null)
    const [theme, setTheme] = useState(false)

    return (
        <>
            <Context.Provider value={{
                movies,
                setMovies,
                listTrigger,
                setListTrigger,
                movieId,
                setMovieId,
                movieTrigger,
                setMovieTrigger,
                theme,
                setTheme
            }}>
                {children}
            </Context.Provider>
        </>
    );
};

export default ContextProvider;