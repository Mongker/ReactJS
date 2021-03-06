/**
 * Copyright 2020-present, Mong Lê Văn , Cop.
 * All rights reserved.
 *
 * @author Mong Lê Văn  on 4/10/2020.
 */

import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";

// component 
import RouterURL from './routerURL/RouterURL';
// import Login from './login/Login';

class App extends React.Component {
  render(){
    return (
      <Router>
          <RouterURL />
      </Router>
      
    );
  }
}
export default App;
