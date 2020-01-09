// import React from 'react';
// import ProspectDetails from './Components/ProspectDetails/ProspectDetails'
// import './App.css';


// function App() {
//     return (
//       <ProspectDetails />
    
//     )

// }

import React, {Component} from 'react';
import prospects from './AllProspects'
import { Link, Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Show from './Components/Show/Show'

import './App.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prospects: prospects
    };
  }

  render() {
    return (
      <div>
        <header>
          <nav style={{marginLeft: '50px'}}>
            <Link to="/">ProspectTracker</Link>
          </nav>
        </header>
        
        <Route path="/" exact render={props => <Home {...props} prospects={this.state.prospects}/>} />
        <Route path="/prospects/:companyName" render={props => <Show {...props} prospects={this.state.prospects}/>}/> 

      </div>
    )
  }
}


export default App;





