import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import './Home.css'


class Home extends Component {
  render() {  
    const allProspects = this.props.prospects.map((currentProspect, index) => (
        <div className='card' key={index}>
          <Link id='home-page' to={'/prospects/' + currentProspect.companyName}>
              <i className="far fa-address-card"></i>
              <span>{' '}{currentProspect.companyName}</span>
              <h4>{currentProspect.jobAppliedFor}</h4>
          </Link>
        </div>
    ))

    return(
      <div id='prospect-container'>
        <div id='all-prospects'>
          {allProspects}
        </div>
      </div>
    )
  }
}

export default Home