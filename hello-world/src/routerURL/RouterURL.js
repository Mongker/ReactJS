/**
 * Copyright 2020-present, Mong Lê Văn , Cop.
 * All rights reserved.
 *
 * @author Mong Lê Văn  on 4/10/2020.
 */
import React, { Component } from 'react'
import {Route, Switch} from "react-router-dom";

// component 
import Login from '../login/Login';
import SignUp from '../login/SignUp';
class RouterURL extends Component {
    render () {
        return (
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/signup" component={SignUp}/>
                </Switch>
        )
    }
}

export default RouterURL;