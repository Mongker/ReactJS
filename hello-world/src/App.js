/**
 * Copyright 2020-present, Mong Lê Văn , Cop.
 * All rights reserved.
 *
 * @author Mong Lê Văn  on 4/10/2020.
 */

import React from 'react';
import './App.css';

// component 
import Login from './login/Login';

class App extends React.Component {
  render(){
    return (
      <div className= "App-header">
        <Login />
      </div>
    );
  }
}
export default App;
