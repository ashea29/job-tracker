import React from 'react'
import { Link } from 'react-router-dom'
import CreateForm from '../Form/CreateForm'
import './CreateProspect.css'

const CreateProspect = (props) => {
 
  return (
    <div className="outer-container-create">
      <div className='back-button'>
          <Link to="/">BACK</Link>
      </div>
      <div className="flex-container">
        <CreateForm />
      </div>
    </div>
    
  )
}

export default CreateProspect
