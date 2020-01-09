import React, {Component} from 'react';
import { Link, Route } from 'react-router-dom'
import prospects from './data/AllProspects'
import ProspectDetails from './Components/ProspectDetails/ProspectDetails'
import Home from './Components/Home/Home'
import CreateProspect from './Components/CreateProspect/CreateProspect';
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
          <nav>
            <h1 id='title'>PROSPECT TRACKER</h1>
            <Link to="/create-new-prospect"><h3 id='create-button'>Create New Prospect</h3></Link>
          </nav>
        </header>
        
        <Route path='/create-new-prospect' exact component={CreateProspect}/>
        <Route path="/" exact render={props => <Home {...props} prospects={this.state.prospects}/>} />
        <Route path="/prospects/:companyName" render={props => <ProspectDetails {...props} prospects={this.state.prospects}/>}/> 

      </div>
    )
  }
}


export default App;





