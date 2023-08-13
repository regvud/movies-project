import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import {Context} from "../../HOC/ContextProvider";
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <>
            <div className={styles.main}>
                <NavLink to={'/'} className={styles.navLink}>Main</NavLink>
                <NavLink to={'/list'} className={styles.navLink}>List</NavLink>
            </div>
        </>
    );
};

export default Navbar;