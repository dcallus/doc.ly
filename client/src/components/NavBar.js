import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const NavBar = ({loadingMessage, isLoading}) => {


    return (
        <div id="navbar-container">
            {loadingMessage} 
            {isLoading && <FontAwesomeIcon icon={faSpinner} className={"fa-spin fa-2x"} />}
        </div>
    )
};

export default NavBar;