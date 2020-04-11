/**
 * Copyright 2020-present, Mong Lê Văn , Cop.
 * All rights reserved.
 *
 * @author Mong Lê Văn  on 4/10/2020.
 */
import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom';

// component 
import Login from '../login/Login';
import SignUp from '../login/SignUp';
// import Tes from '../login/';

class RouterURL extends Component {
    render () {
        return (
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route path="/signup" component={SignUp} />
                    {/* <Route path="/test" component={Test}/> */}
                    <Route component={Login}/>
                </Switch>
        )
    }
}

export default RouterURL;