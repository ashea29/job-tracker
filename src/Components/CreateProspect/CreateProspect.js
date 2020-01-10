import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './CreateProspect.css'

const CreateProspect = (props) => {

  const [prospect, setProspect] = useState({
    companyName: '',
    address: '',
    lat: '',
    lng: '',
    website: '',
    jobAppliedFor: '',
    contactPerson: '',
    email: '',
    github: '',
  });

  const {companyName, address, website, jobAppliedFor, contactPerson, email, github} = prospect

  const onChange = evt => setProspect({
    ...prospect, [evt.target.name]: evt.target.value
  })

 
  return (
    <div className="outer-container-create">
      <div className='back-button'>
          <Link to="/">BACK</Link>
      </div>
      <div className="flex-container">
        <form>
        <h2 className="text-primary">Create A New Prospect!</h2>
        <input
          type="text"
          placeholder=" Company Name"
          name="companyName"
          value={companyName}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Address"
          name="address"
          value={address}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Website"
          name="website"
          value={website}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Job Applied For"
          name="jobAppliedFor"
          value={jobAppliedFor}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Contact Person"
          name="contactPerson"
          value={contactPerson}
          onChange={onChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="GitHub"
          name="github"
          value={github}
          onChange={onChange}
        />
        
        <div>
          <Link id='create-page' to='/'>
            <button type="submit" value="Add Prospect" className="submit-button">Create</button>        
          </Link>
        </div>
    </form>
      </div>
    </div>
    
  )
}

export default CreateProspect
