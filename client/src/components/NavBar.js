import React from 'react'


const NavBar = ({changeDistance}) => {


    return (
        <div id="navbar-container">
            Radius:
            <button className = "button" onClick={() => changeDistance(1000)}>1000²m</button>
            <button className = "button" onClick={() => changeDistance(2000)}>2000²m</button>
        </div>
    )
};

export default NavBar;