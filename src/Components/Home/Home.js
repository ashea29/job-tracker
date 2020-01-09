import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import './Home.css'


class Home extends Component {
  
  render() {
    const allProspects = this.props.prospects.map((currentProspect, index) => (
      <div className='home-container'>
        <div className='card' key={index}>
          <Link to={'/prospects/' + currentProspect.companyName}>
              <i class="far fa-address-card"></i>
              <span>{' '}{currentProspect.companyName}</span>
          </Link>
        </div>
      </div>
      
    ))

    return(
      <div style={{marginLeft: '50px'}}>
        <div className="section-heading">
          <h1>Prospects</h1>
        </div>
        <div>
          {allProspects}
        </div>
      </div>
    )
  }
}

export default Home