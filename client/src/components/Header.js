import React from 'react'

const Header = () => {

    const handleHomeClick = () => {
        window.location = '/'
    }

    return (
        <div id = "header">
            <h1>DOC.LY</h1>
        </div>
    )
}

export default Header; 