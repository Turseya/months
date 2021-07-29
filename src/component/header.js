import React from "react";
import classes from './header.module.css'

const Header = () => {
    const date = new Date();
    const year = date.getFullYear()
    return (
        <div>
            <h1 className={classes.header}>{year}</h1>
        </div>
    )
}
export default Header;