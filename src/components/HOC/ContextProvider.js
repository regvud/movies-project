import React, {createContext, useState} from 'react';

export const Context = createContext(null);
const ContextProvider = ({children}) => {
    const [movies, setMovies] = useState([])
    const [trigger, setTrigger] = useState(false)
    const [movieId, setMovieId] = useState(null)
    return (
        <div>
            <Context.Provider value={{movies, setMovies, trigger, setTrigger, movieId, setMovieId}}>
                {children}
            </Context.Provider>
        </div>
    );
};

export default ContextProvider;