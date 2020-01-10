import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ProspectInfo from '../ProspectInfo/ProspectInfo'
import Map from '../Map/Map'

import './ProspectDetails.css'
import '../Map/Map.css'


class ProspectDetails extends Component {
  render() {
    console.log(this.props)
    const companyName = this.props.match.params.companyName;
    const thisCompany = this.props.prospects.find((thisCompany) => {
      return (
        thisCompany.companyName === companyName
      )
    })

    return (
      <div id="outer-container">
        <div className='back-button'>
              <Link to="/">BACK</Link>
        </div>
        <div id='grid-container'>
          <ProspectInfo identifier={thisCompany}/>

          <div id='map'>
            <Map lat={thisCompany.lat} lng={thisCompany.lng}/>
          </div>
          
        </div>
      </div>
    )
  }
}



export default ProspectDetails
