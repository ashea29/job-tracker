import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ProspectMap from '../Map/Map'

import './ProspectDetails.css'


class ProspectDetails extends Component {
  render() {
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
          <div className="prospect-info">
            <h1 id='show-page'>
              {thisCompany.companyName}
            </h1>
            <p>Address: 
              <span className='no-bold'>{thisCompany.address}</span>
            </p>
            <p>Website:
              <span className='no-bold'>{thisCompany.website}</span>
            </p>
            <p className='position'>Job Applied For:
              <span className='no-bold'>{thisCompany.jobAppliedFor}</span> 
            </p>
            <p> Contact:
              <span className='no-bold'>{' '}{thisCompany.contactPerson}</span>
            </p>
            <p>Email:
              <span className='no-bold'>{thisCompany.email}</span>
            </p>
            <p>GitHub:
              <span className='no-bold'>{thisCompany.github}</span>
            </p>
          </div>
          
          <div id='map' style={{height: '400px', width: '600px'}}>
            <ProspectMap />
          
          </div>
        </div>
      </div>
    )
  }
}


export default ProspectDetails
