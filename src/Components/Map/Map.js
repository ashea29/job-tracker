import React from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps'



function Map(){
  return(
    <GoogleMap 
      id='map' 
      defaultZoom={14} 
      defaultCenter={{lat: 39.739235, lng: -104.990250}}>

      <Marker position={{lat: 39.739235, lng: -104.990250}}/>
    
    </GoogleMap>

    
  )
}

const MapComponent = withScriptjs(withGoogleMap(Map))


export default function ProspectMap() {
  // console.log('this is key from inside mapJS', process.env)
  return (
    <MapComponent
      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_MAPS_KEY}`}
      loadingElement={<div style={{height: "100%"}}/>}
      containerElement={<div style={{height: "100%"}}/>}
      mapElement={<div style={{height: "100%"}}/>}
    />
  )
}