import React from 'react'


const NavBar = ({ coffees, onSelectRegion, onSelectTaste, onSelectBean}) => {


    const handleRegionChange = function (event) {
        let region = event.target.value;
        onSelectRegion(region)
    };

    const handleTasteChange = function (event) {
        let taste = event.target.value;
        onSelectTaste(taste)
    };

    const handleBeanChange = function (event) {
        let bean = event.target.value;
        onSelectBean(bean)
    };

    const getFlavours = () => {

        let flavourList = []
        coffees.map((coffee) => {
            const flavours = coffee.taste_profile.split(",").map(taste => taste.trim());
            flavourList.push(...flavours);
            flavourList.sort();
        });

        const flavourSet = new Set(flavourList);
        const flavourArray = Array.from(flavourSet);
        return flavourArray
    };

    const flavourMapping = getFlavours().map((flavour, index) => {
        return <option value={flavour} key={index}>Flavour: {flavour}</option>
    });


    return (
        <div id="navbar-container">

        </div>
    )
};

export default NavBar;