import React, { useState, useEffect} from 'react';
import NavBar from '../components/NavBar'
import L from 'leaflet';
import { MapContainer, TileLayer, useMap} from 'react-leaflet';
import doc from '../images/doc-symbol.png';
import docShadow from '../images/doc-symbol-shadow.png'
import Loading from '../components/Loading.js'
import MarkerList from "../components/map_components/MarkerList"


const Map = ({}) => {
  getLocation()

  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [doctors, setDoctors] = useState({})

  function FlyTo() {
    const map = useMap()
    if (long != 0) {
      map.flyTo([lat, long], 14)
    }
    return null
  };

  async function getDoctors (lat, long) {
    return fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=doctor&location=${lat}%2C${long}&radius=2000&type=health&key=AIzaSyCo5P0oK1yXi9wZs7zyQTV6puo5dswHmUY`).then((response) => {
    if (response.ok) {
        return response.json();
    } else {
      throw new Error('Something went wrong');
    }
  })
  .then((responseJson) => {
    if (responseJson.results.length > 0){
      setDoctors(responseJson.results)};
  })
  .catch((error) => {
    console.log(error)
  })}

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(saveLocation);
  }}

  function saveLocation(position) {
    setLat(position.coords.latitude);
    setLong(position.coords.longitude);
  }

  useEffect(() => {
  getDoctors(lat, long);
  }, [long]);


  const icon = L.icon({
    iconUrl: doc,
    shadowUrl: docShadow,
    iconSize: [60, 60],
    shadowSize: [60, 80],
    shadowAnchor: [20, 48],
    popupAnchor: [0, -20]
  });

  return (

    <>
        <div>
          <NavBar />

          <MapContainer className="map" attributionControl={false} center={[20, 60]} zoom={3}
          scrollWheelZoom={false}
          minZoom={2}
           >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <MarkerList icon={icon} doctors={doctors}/>
            <FlyTo />
          </MapContainer>
          
        </div>

    </>

  )

};

export default Map;