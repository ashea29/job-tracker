import React, {Component} from 'react';
import { Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import ProspectDetails from './Components/ProspectDetails/ProspectDetails'
import Home from './Components/Home/Home'
import CreateProspect from './Components/CreateProspect/CreateProspect';
import prospects from './data/AllProspects'
import './App.css';


console.log(prospects)

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
          <Navbar />
        </header>
        
        <Route 
          path='/create-new-prospect' exact 
          render={props => <CreateProspect {...props} 
          prospects={this.state.prospects}/>} />

        <Route path="/" exact 
          render={props => <Home {...props} 
          prospects={this.state.prospects}/>} />

        <Route path="/prospects/:companyName" 
          render={props => <ProspectDetails {...props} 
          prospects={this.state.prospects}/>} /> 

      </div>
    )
  }
}


export default App;





