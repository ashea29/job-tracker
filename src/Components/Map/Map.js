/* 

MANY THANKS TO THE FOLLOWING RESOURCE:

    https://www.youtube.com/watch?v=W5LhLZqj76s
    A YouTube video posted by Yahya Elharony

FOR DEMONSTRATING HOW TO USE THE GOOGLE MAPS API IN REACT WITHOUT HAVING TO UTILIZE A 3RD-PARTY NPM PACKAGE! THIS FINALLY ALLOWED ME TO PASS 'LAT' & 'LNG' PROPS TO THE MAP COMPONENT, AND ULTIMATELY MADE EVERYTHING WORK.

*/


import React, { Component } from 'react'


class Map extends Component{
  componentDidMount(){
    this.mapDataFetch()
  }

  mapDataFetch = () => {
    loadScript(`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAPS_KEY}&callback=initMap`)
    window.initMap = this.initMap
  }
  
  initMap = () => {
    const thisPosition = {lat: this.props.lat, lng: this.props.lng}
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: thisPosition,
      zoom: 14
    })

    const marker = new window.google.maps.Marker({position: thisPosition, map: map})
    console.log(marker)
  }

  render() {
    return(
      <div id="map"></div>
    )
  }
}


function loadScript(url) {
  const index = window.document.getElementsByTagName('script')[0]
  const script = window.document.createElement('script')
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}

export default Map