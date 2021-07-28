import React from "react";

const Header = () => {
    const date = new Date();
    const year = date.getFullYear()
    return (
        <div>
            <h1>{year}</h1>
        </div>
    )
}
export default Header;