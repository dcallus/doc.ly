import React from 'react';
import { Marker, Popup, Tooltip } from 'react-leaflet';



const MarkerList = ({icon, doctors, showModal}) => {
    let markerNodes = null;
    if (doctors.length > 1){
    markerNodes = doctors.map((doctor) => {
        return <Marker
         
        position={[doctor.geometry.location.lat, doctor.geometry.location.lng]} icon={icon}>
        
             <Popup>
             <div id= 'popup'>           
            <h3>{doctor.name}</h3>
            
            <p>
                <ul>
                    <li>Rating: {doctor.rating}/5</li>
                    <li>Address:  {doctor.vicinity}</li>
                </ul>
                <button className="button" onClick={showModal}>Book Appointment</button>
            </p>
            </div>
            </Popup >
            <Tooltip direction="bottom" offset={[0, 20]} opacity={0.9}>{doctor.name}</Tooltip>
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