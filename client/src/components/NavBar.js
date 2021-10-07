import React from 'react'


const NavBar = ({changeDistance}) => {


    return (
        <div id="navbar-container">
            Distance:
            <button className = "button" onClick={() => changeDistance(10)}>10</button>
            <button className = "button" onClick={() => changeDistance(20)}>20</button>
            <button className = "button" onClick={() => changeDistance(30)}>30</button>
        </div>
    )
};

export default NavBar;