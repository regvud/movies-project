import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import {Context} from "../../HOC/ContextProvider";
import styles from './Navbar.module.css'

const Navbar = () => {
    const {setListTrigger} = useContext(Context)
    return (
        <>
            <div className={styles.main}>
                <NavLink to={'/'} className={styles.navLink}
                         onClick={() => setListTrigger(prev => !prev)}>Main</NavLink>
                <NavLink to={'/list'} className={styles.navLink}
                         onClick={() => setListTrigger(prev => !prev)}>List</NavLink>
            </div>
        </>
    );
};

export default Navbar;