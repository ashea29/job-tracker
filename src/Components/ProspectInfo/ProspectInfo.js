import React from 'react'


const ProspectInfo = (props) => {
  return (
    <>
      <div className="prospect-info">
            <h1 id='show-page'>
              {props.identifier.companyName}
            </h1>
            <p>Address: 
              <span className='no-bold'>{props.identifier.address}</span>
            </p>
            <p>Website:
              <span className='no-bold'>{props.identifier.website}</span>
            </p>
            <p className='position'>Job Applied For:
              <span className='no-bold'>{props.identifier.jobAppliedFor}</span> 
            </p>
            <p> Contact:
              <span className='no-bold'>{' '}{props.identifier.contactPerson}</span>
            </p>
            <p>Email:
              <span className='no-bold'>{props.identifier.email}</span>
            </p>
            <p>GitHub:
              <span className='no-bold'>{props.identifier.github}</span>
            </p>
          </div>
    </>
  )
}

export default ProspectInfo
