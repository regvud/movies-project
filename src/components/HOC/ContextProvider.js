import React, {createContext, useState} from 'react';

export const Context = createContext(null);
const ContextProvider = ({children}) => {
    const [movieId, setMovieId] = useState(null)
    const [theme, setTheme] = useState(false)

    return (
        <>
            <Context.Provider value={{
                movieId,
                setMovieId,
                theme,
                setTheme
            }}>
                {children}
            </Context.Provider>
        </>
    );
};

export default ContextProvider;