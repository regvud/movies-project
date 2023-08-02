import React, {createContext, useState} from 'react';

export const Context = createContext(null);
const ContextProvider = ({children}) => {
    const [movies, setMovies] = useState([])
    const [listTrigger, setListTrigger] = useState(false)
    const [movieTrigger, setMovieTrigger] = useState(false)
    const [movieId, setMovieId] = useState(null)

    return (
        <div>
            <Context.Provider value={{
                movies,
                setMovies,
                listTrigger,
                setListTrigger,
                movieId,
                setMovieId,
                movieTrigger,
                setMovieTrigger
            }}>
                {children}
            </Context.Provider>
        </div>
    );
};

export default ContextProvider;