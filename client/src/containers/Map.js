import React, { useState, useEffect} from 'react';
import NavBar from '../components/NavBar'
import L from 'leaflet';
import { MapContainer, TileLayer} from 'react-leaflet';
import doc from '../images/doc-symbol.png';
import docShadow from '../images/doc-symbol-shadow.png'
import Loading from '../components/Loading.js'
import { getDoctors } from '../Services';
// import { getCoffees } from "../Services"
import MarkerList from "../components/map_components/MarkerList"


const Map = ({coffees}) => {

  // const [coffees, setCoffees] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedTaste, setSelectedTaste] = useState('All');
  const [selectedBean, setSelectedBean] = useState('Both');
  const [filteredCoffees, setFilteredCoffees] = useState([coffees]);
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [distance, setDistance] = useState(10);

  const changeDistance = (distance) => {
    setDistance(distance);
  }

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(saveLocation);
  }}

  function saveLocation(position) {
    setLat(position.coords.latitude);
    setLong(position.coords.longitude);
    // console.log("Latitude: " + state.lat + 
    // "Longitude: " + state.long);
  }

  getLocation();
  useEffect(() => {
    filterCoffees()
  }, [selectedRegion, selectedTaste, selectedBean, coffees])


  getDoctors().then((value) => console.log(value));

  const onSelectRegion = function (region) {
    setSelectedRegion(region)
  };

  const onSelectTaste = function (taste) {
    setSelectedTaste(taste)
  };

  const onSelectBean = function (bean) {
    setSelectedBean(bean)
  };

  const coffeeIcon = L.icon({
    iconUrl: doc,
    shadowUrl: docShadow,
    iconSize: [60, 60],
    shadowSize: [60, 80],
    shadowAnchor: [20, 48],
    popupAnchor: [0, -20]
  });

  function filterCoffees() {
    // three filters in series
    let filteredByTaste = []
    coffees.forEach((coffee => {
      if (selectedTaste !== "All") {
        if (coffee.taste_profile.search(selectedTaste) !== -1) {
          filteredByTaste.push(coffee)
        }

      }
      else {
        filteredByTaste = coffees
      }
    }
    ));

    let filteredByBean = []
    filteredByTaste.forEach((coffee => {
      if (selectedBean !== "Both") {
        if (coffee.bean_type == selectedBean) {
          filteredByBean.push(coffee)
        }

      }
      else {
        filteredByBean = filteredByTaste
      }
    }));

    let filteredByRegion = []
    filteredByBean.forEach((coffee => {
      if (selectedRegion !== "All") {
        if (coffee.region == selectedRegion) {
          filteredByRegion.push(coffee)
        }
      }
      else {
        filteredByRegion = filteredByBean
      }
    }))
    setFilteredCoffees(filteredByRegion)
  };



  return (

    <>
      {  lat !== 0 && long !== 0 ?
        <div>
          <NavBar changeDistance={changeDistance}
          />


          <MapContainer className="map" attributionControl={false} center={[lat, long]} zoom={15}
          scrollWheelZoom={false}
          minZoom={2}
           >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <MarkerList coffees={filteredCoffees} icon={coffeeIcon} />
          </MapContainer>
          
        </div> : 
        <Loading></Loading>
        }
    </>

  )

};

export default Map;