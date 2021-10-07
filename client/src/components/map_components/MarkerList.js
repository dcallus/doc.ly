import React from 'react';
import { Marker, Popup, Tooltip } from 'react-leaflet';



const MarkerList = ({icon, doctors}) => {
    console.log(doctors)
    let markerNodes = null;
    if (doctors.length > 1){
    markerNodes = doctors.map((doctor) => {
        return <Marker
         
        position={[doctor.geometry.location.lat, doctor.geometry.location.lng]} icon={icon}>
        
             <Popup>
             <div id= 'popup'>           
            <h3></h3>
            
            <p>
                <ul>
                    <li id = "region-popup">Region: </li>
                    <li>Number of Farms: </li>
                    <li>Production Volume:  60kg bags per year</li>
                    <li>Bean Type: </li>
                    <li>Taste Profile: </li>
                    <li>Export Volume: 60kg bags per year</li>
                </ul>
            </p>
            </div>
            </Popup >
            <Tooltip direction="bottom" offset={[0, 20]} opacity={0.9}></Tooltip>
            </Marker>
    });
}

    return (
        markerNodes?
        <div>{markerNodes}</div>
        :
        <div></div>
    )
}

export default MarkerList;