import React from 'react'
import ProspectMap from '../Map/Map'



function ProspectDetails() {
  return(
    <div className='grid-container'>
      <div id='map' style={{height: '400px', width: '600px'}}>
        <ProspectMap />
        
      </div>
    </div>
  )
}



export default ProspectDetails