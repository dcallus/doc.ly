import React, { useState, useEffect, useRef } from "react";
// import Map from '../components/Map'
import Map from "./Map";
import Footer from "../components/Footer";
import NavBarBottom from "../components/NavBarBottom";

const UiContainer = () => {


  return (
    <div id="Ui-Container">
      <Map />
      <NavBarBottom />
      <Footer />
    </div>
  )
};

export default UiContainer;
