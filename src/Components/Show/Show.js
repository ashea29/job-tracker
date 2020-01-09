import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Show.css'


class Show extends Component {
  render() {
    console.log(this.props)
    const companyName = this.props.match.params.companyName;

    // // console.log(this.props.birds)
    const thisCompany = this.props.prospects.find((thisCompany) => {
      return (
        console.log(thisCompany),
        thisCompany.companyName === companyName
        
      )
    })
    
    return (
      // <div>TEST</div>
      <div className="prospect-info">
        <h1 classname='companyName'>
          {thisCompany.companyName}
        </h1>
        <p>ADDRESS: 
          {' '}{thisCompany.address}
        </p>
        {/* <p className="conservation-status">
          Conservation Status
        </p> */}
        {/* <p className="text"> */}
        <p>
          {thisCompany.website}
        </p>
        <p> Contact:
          {' '}{thisCompany.contactPerson}
        </p>
        <p>
          {thisCompany.email}
        </p>
        <p>
          {thisCompany.github}
        </p>
        <br />
        
        {/* <a href={thisBird.homepage} className="navButtons read-more">READ MORE</a> */}
        <Link to="/" className="navButtons back-button">BACK</Link>
      </div>
    )
}
}


export default Show