import React from 'react'


const NavBar = ({loadingMessage}) => {


    return (
        <div id="navbar-container">
            {loadingMessage}
        </div>
    )
};

export default NavBar;