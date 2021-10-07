import React from 'react'

const Header = () => {

    const handleHomeClick = () => {
        window.location = '/'
    }

    return (
        <div id = "header">
            <h1>PHLO</h1>
        </div>
    )
}

export default Header; 