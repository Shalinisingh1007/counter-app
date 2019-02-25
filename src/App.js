import React, { Component } from 'react';
import Counters from './components/countersComponent';
import './App.css';
import NavBar from './components/navBarComponenet';

class App extends Component {
  render() {
    return (
     <React-Fragment>
       <NavBar></NavBar>
       
       <Counters/>
       
     </React-Fragment>
    );
  }
}

export default App;
