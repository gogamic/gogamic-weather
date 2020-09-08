import React, { useState } from "react";



export default function Weather() {
  const [lat, setLat] = useState(0);
  
   const getloction = navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      setLat( position.coords.latitude)

      
    });
  
  return(
  <>
  <h1>{lat}</h1>
  </>
  );
}